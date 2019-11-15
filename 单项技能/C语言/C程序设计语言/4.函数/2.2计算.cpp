#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int len(int stack[]);
void push(double* stack, double n);
int pop(double* stack);
double power(int m, int n);

int main() {
	
	return 0;
}

int len(int stack[]) {
	int length = 0;

	for (length = 0; stack[length] != '\0'; length++);
	return length;
}

void push(double* stack, double n) {
	int* new_stack = (int*)malloc(0);
	int length = len(stack) + 1;

	new_stack = (int*)realloc(stack, (length + 1) * sizeof(int));
	if (new_stack) {
		new_stack[length - 1] = n;
		new_stack[length] = '\0';
		stack = new_stack;
	}
}

int pop(double* stack) {
	int* new_stack = (int*)malloc(0);
	int length = len(stack);
	int item;

	item = stack[length - 1];
	new_stack = (int*)realloc(stack, length * sizeof(int));
	if (!new_stack) return '\0';
	new_stack[length - 1] = '\0';
	stack = new_stack;
	return item;
}

double power(int n, int m) {
	double value = 1.0;

	while (m != 0)
	{
		if (m > 0) {
			value *= n;
			m--;
		}
		else {
			value /= n;
			m++;
		}
	}
	return value;
}

int inputFormula() {
	double* stack = (double*)malloc(0);
	int c;
	double n = 0;
	int	i = 0;
	char computed;

	do
	{
		c = getchar();

		if (isdigit(c)) {
			if (i >= 0) {
				n = n * power(10, i) + (double)(c - '0');
				i++;
			}
			else {
				n = n + double((c - '0') * power(10, i + 1));
				i--;
			}
		}
		else if (c == '.') {
			i = -1;
		}
		else if (c == '+' || c == '-' || c == '*' || c == '/') {
			push(stack, n);
			i = 0;
			computed = c;
		}
	} while (c != '\n');
}