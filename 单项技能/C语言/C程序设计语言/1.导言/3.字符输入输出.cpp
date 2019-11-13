#include <stdio.h>

void f1() {
	int c;

	while ((c = getchar()) != EOF) {
		putchar(c);
	}
}

void judgeGetcharWithEOF() {
	int r = getchar() == EOF;

	printf("relsult: %d", r);
}

void printfEOF() {
	printf("EOF: %d\n", EOF);
	printf("EOF is -1: %d", EOF == -1);
}

void computedGetcharLength(char value) {
	long count = 0;
	int cCharCount = 0;
	int c;

	while ((c = getchar()) != EOF) {
		if (c == value) {
			++cCharCount;
		};
		++count;
	}
	printf("\nchar length: %d\n", count);
	printf("\nchar c length: %d\n", cCharCount);
}

int main() {
	//f1();
	//judgeGetcharWithEOF();
	//printfEOF();
	//computedGetcharLength('c');
	return 0;
}