#include <stdio.h>
#include <stdlib.h>

void getMaximumLengthArray();
void getLongLengthArray(int len);

int main() {
	//getMaximumLengthArray();
	getLongLengthArray(10);
	return 0;
}

void getMaximumLengthArray() {
	char* line;
	char* longest;
	int maxLen, i, c;

	maxLen = i = 0;
	line = (char*)malloc(1);
	longest = (char*)malloc(1);
	do
	{
		c = getchar();
		if (c != '\n') {
			line = (char*)realloc(line, i + 1);
			line[i] = c;
			++i;
		}
		else {
			if (i) {
				if (maxLen < i) {
					maxLen = i;
					longest = (char*)realloc(longest, maxLen);
					for (int j = 0; j < maxLen; j++) longest[j] = line[j];
				}
				i = 0;
			}
			else i = -1;
		}
	} while (i != -1 || c != '\n');

	printf("maxLen: %d\n", maxLen);
	printf("longest: ");
	for (int j = 0; j < maxLen; j++) {
		printf("%c", longest[j]);
	}
	printf("\n");
	free(line);
	free(longest);
}

void getLongLengthArray(int len) {
	char* line;
	char** longArray;
	int* lineLengthArray;
	int i, c, longCount;

	i = longCount = 0;
	line = (char*)malloc(0);
	longArray = (char**)malloc(0);
	lineLengthArray = (int*)malloc(0);
	do
	{
		c = getchar();
		if (c != '\n') {
			line = (char*)realloc(line, (i + 1)*sizeof(char));
			line[i] = c;
			++i;
		}
		else {
			if (i) {
				if (i > len) {
					char* longLine;

					longArray = (char**)realloc(longArray, (longCount + 1)*sizeof(char*));
					lineLengthArray = (int*)realloc(lineLengthArray, (longCount + 1)*sizeof(int));
					longLine = (char*)malloc(i*sizeof(char));

					for (int j = 0; j < i; j++) longLine[j] = line[j];
					longArray[longCount] = longLine;
					lineLengthArray[longCount] = i;
					++longCount;
				}
				i = 0;
			}
			else i = -1;
		}
	} while (i != -1 || c != '\n');

	printf("length more than %d count: %d\n", len, longCount);
	printf("length more than %d line: ", len);

	for (int j = 0; j < longCount; j++) {
		for (int l = 0; l < lineLengthArray[j]; l++)
		{
			printf("%c", longArray[j][l]);
		}
		printf("\n");
	}

	free(line);
	for (int i = 0;i < longCount; i++) {
		free(longArray[i]);
	}
	free(longArray);
}