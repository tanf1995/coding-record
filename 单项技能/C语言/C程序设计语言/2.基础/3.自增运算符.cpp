#include <stdio.h>

void squeeze(char s[], int c);
void squeeze2(char s[], char c[]);
int any(char s1[], char s2[]);

int main() {
	char str[] = "abcdeabcdefghijk";
	char cStr[] = "cd";

	squeeze(str, 'a');
	printf("str size: %d\n", sizeof(str));
	printf("str: ");
	for (int i = 0; str[i] != '\0'; i++)
	{
		printf("%c", str[i]);
	}
	printf("\nstr size: %d\n", sizeof(str));

	squeeze2(str, cStr);
	printf("str: ");
	for (int i = 0; str[i] != '\0'; i++)
	{
		printf("%c", str[i]);
	}

	int firstIndex = 0;
	char s1[] = "abcdefg";
	char s2[] = "kl";
	char s3[] = "ez";

	printf("\nfirstIndex: %d\n", any(s1, s2));
	printf("firstIndex: %d\n", any(s1, s3));
	return 0;
}

// É¾³ý×Ö·û´®ÖÐ×Ö·û
void squeeze(char s[], int c) {
	int i, j;

	for (i = j = 0; s[i] != '\0'; i++)
	{
		if (s[i] != c) {
			s[j++] = s[i];
		}
	}
	s[j] = '\0';
}

void squeeze2(char s[], char c[]) {
	int i, j, k;

	for (i = j = k = 0; s[i] != '\0'; i++)
	{
		if (s[i] == c[k]) {
			++k;
		}
		if (c[k] == '\0') {
			j = j - k + 1;
			k = 0;
		}
		else {
			s[j++] = s[i];
		}
	}
	s[j] = '\0';
}

int any(char s1[], char s2[]) {
	for (int i = 0; s1[i] != '\0'; i++)
	{
		for (int j = 0; s2[j] != '\0'; j++) {
			if (s1[i] == s2[j]) return i;
		}
	}
	return -1;
}