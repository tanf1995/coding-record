#include <stdio.h>
#include <limits.h>

long int computedDigit(int digit);

int main() {
	printf("base data type size: \n");
	printf("char: %d\n", sizeof(char));
	printf("int: %d\n", sizeof(int));
	printf("float: %d\n", sizeof(float));
	printf("double: %d\n", sizeof(double));
	printf("\n\n");

	printf("base data type boundary value: \n");
	// 第一位为符号位
	printf("int: %d - %d\n", INT_MIN, INT_MAX);
	printf("int: %d - %d\n", -computedDigit(sizeof(int) * 8 - 1) - 1, computedDigit(sizeof(int) * 8 - 1));
	printf("char: %d - %d\n", CHAR_MIN, CHAR_MAX);
	printf("char: %d - %d\n", -computedDigit(sizeof(char) * 8 - 1) - 1, computedDigit(sizeof(char) * 8 - 1));
	printf("\n");
	printf("unsigned int: 0 - %u\n", computedDigit(sizeof(int) * 8));
	printf("signed int: -%u - -1\n", computedDigit(sizeof(int) * 8));
	printf("\n");
	printf("long int: -%lu - %lu\n", LONG_MIN, LONG_MAX);
	printf("long int: -%lu - %lu\n", computedDigit(sizeof(long) * 8 - 1) + 1, computedDigit(sizeof(long) * 8 - 1));
	printf("short int: %d - %d\n", SHRT_MIN, SHRT_MAX);
	printf("short int: %d - %d\n", -computedDigit(sizeof(short) * 8 - 1) - 1, computedDigit(sizeof(short) * 8 - 1));

	return 0;
}

long int computedDigit(int digit) {
	long int value = 1;
	long int item = 1;

	for (int i = 1; i < digit; i++)
	{
		item = item * 2;
		value += item;
	}

	return value;
}