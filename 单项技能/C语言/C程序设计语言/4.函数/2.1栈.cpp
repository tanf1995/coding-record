#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int len(char str[]);
void push(char* stack, char c);
char pop(char* stack);

int main() {
	// ≤‚ ‘’ª∑Ω∑®
	char* str = (char*)malloc(6);

	if (!str) return -1;
	for (int i = 0; i < 5; i++) {
		str[i] = (char)('a' + i);
	}
	str[5] = '\0';
	printf("str: %s\n", str);
	printf("push 'f'\n");
	push(str, 'f');
	printf("str: %s\n", str);
	printf("pop\n");
	pop(str);
	printf("str: %s\n", str);
	printf("pop again\n");
	char popC = pop(str);
	printf("str: %s\n", str);
	printf("pop char: %c\n", popC);

	free(str);

	
	return 0;
}

int len(char str[]) {
	int length = 0;

	for (length = 0; str[length] != '\0'; length++);
	return length;
}

void push(char* stack, char c) {
	char* new_stack = (char*)malloc(0);
	int length = len(stack) + 1;

	new_stack = (char*)realloc(stack, length + 1);
	if (new_stack) {
		new_stack[length - 1] = c;
		new_stack[length] = '\0';
		stack = new_stack;
	}
}

char pop(char* stack) {
	char* new_stack = (char*)malloc(0);
	int length = len(stack);
	char item;

	item = stack[length - 1];
	new_stack = (char*)realloc(stack, length);
	if (!new_stack) return '\0';
	new_stack[length - 1] = '\0';
	stack = new_stack;
	return item;
}