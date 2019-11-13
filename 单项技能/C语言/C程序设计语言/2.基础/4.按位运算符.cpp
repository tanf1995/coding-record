#include <stdio.h>

int isOdd(int n);
void exchangeItem(int number[], int n, int m);

int main() {
	printf("1 - 10 的奇数有：");
	for (int i = 1; i < 11; i++)
	{
		if (isOdd(i)) printf(" %d ", i);
	}
	printf("\n\n");

	int number[2];

	number[0] = 15;
	number[1] = 28;
	printf("交换前 number[0]: %d, number[1]: %d\n", number[0], number[1]);
	exchangeItem(number, 0, 1);
	printf("交换后 number[0]: %d, number[1]: %d\n\n", number[0], number[1]);


	return 0;
}

// 判断奇数
int isOdd(int n) {
	return n & 1;
}

// 交换数组中两个元素值
void exchangeItem(int number[], int n, int m) {
	number[n] ^= number[m];
	number[m] ^= number[n];
	number[n] ^= number[m];
}
