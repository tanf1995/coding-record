#include <stdio.h>

int htoi(char str[]);

int main() {
	char str[] = "acf";

	printf("str -> int: %d\n", htoi(str));
	return 0;
}

int htoi(char str[]) {
	int value = 0, i = 0;
	int len = sizeof(str) / sizeof(str[0]);

	while (str[i] != '\0')
	{
		int tempTimes = 1;

		for (int j = 0; j < len - i - 2; j++)
		{
			tempTimes = tempTimes * 16;
		}

		value += (str[i] - 'a' + 10) * tempTimes;
		++i;
	}
	return value;
}