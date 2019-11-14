#include <stdio.h>

char* lower(char str[]);

int main() {
	char str[] = "abCDeFgHIJklmN";

	printf("abCDeFgHIJklmN: ");
	lower(str);
	for (int i = 0; str[i] != '\0'; i++)
	{
		printf("%c", str[i]);
	}

	return 0;
}

char* lower(char str[]) {
	for (int i = 0; str[i] != '\0'; i++)
	{
		str[i] = str[i] >= 'A' && str[i] <= 'Z' ? str[i] - 'A' + 'a' : str[i];
	}

	return str;
}