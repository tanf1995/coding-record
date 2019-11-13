#include <stdio.h>

int isOdd(int n);
void exchangeItem(int number[], int n, int m);

int main() {
	printf("1 - 10 �������У�");
	for (int i = 1; i < 11; i++)
	{
		if (isOdd(i)) printf(" %d ", i);
	}
	printf("\n\n");

	int number[2];

	number[0] = 15;
	number[1] = 28;
	printf("����ǰ number[0]: %d, number[1]: %d\n", number[0], number[1]);
	exchangeItem(number, 0, 1);
	printf("������ number[0]: %d, number[1]: %d\n\n", number[0], number[1]);


	return 0;
}

// �ж�����
int isOdd(int n) {
	return n & 1;
}

// ��������������Ԫ��ֵ
void exchangeItem(int number[], int n, int m) {
	number[n] ^= number[m];
	number[m] ^= number[n];
	number[n] ^= number[m];
}
