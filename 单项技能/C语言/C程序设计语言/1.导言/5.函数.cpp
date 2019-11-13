#include <stdio.h>

#define LINEMAXLEN 100

int power(int, int);
void testArg(int);
int getLine(char line[], int maxLen);
void copyLine(char from[], char to[]);

int main() {
	// test power
	//for (int i = 0; i < 10; i++) printf("5的%d次方：%lu\n", i, power(5, i));

	// test testArg
	/*int m = 5;
	testArg(m);
	printf("变量m值： %d\n", m);*/

	// test getLine copyLine
	int len, maxLen;
	char line[LINEMAXLEN];
	char longest[LINEMAXLEN];

	maxLen = 0;
	for (int i = 0; i < LINEMAXLEN; i++)
	{
		line[i] = 0;
		longest[i] = 0;
	}
	while ((len = getLine(line, LINEMAXLEN)) > 0)
	{
		//printf("line length: %d", len);
		if (maxLen < len) {
			maxLen = len;
			copyLine(line, longest);
		}
	}
	printf("over\n");
	printf("maximum length is: %d\n", maxLen);
	printf("maximum length line is: ");
	for (int i = 0; i < LINEMAXLEN; i++)
	{
		if (longest[i]) printf("%c", longest[i]);
	}
	printf("\n");

	return 0;
}

int power(int m, int n) {
	if (n == 0) {
		return 1;
	}
	else if (n > 0)
	{
		int rel = 1;
		for (int i = 0; i < n; i++)
		{
			rel = rel * m;
		}
		return rel;
	}
	/*else
	{
		double rel = 1.0;
		for (int i = 0; i > n; i--)
		{
			rel = rel / m;
			printf("---%f---\n", rel);
		}
		return rel;
	}*/
	return m;
}

void testArg(int m) {
	printf("参数m值： %d\n", m);
	m = 10;
	printf("参数m值： %d\n", m);
}

int getLine(char line[], int maxLen) {
	int c, i;

	i = 0;
	do
	{
		c = getchar();
		if (c != '\n') {
			line[i] = c;
			++i;
		}
	} while (c != '\n' && i < maxLen - 1);

	return i;
}

void copyLine(char from[], char to[]) {
	for (int i = 0; i < LINEMAXLEN; i++)
	{
		if (from[i]) to[i] = from[i];
	}
}