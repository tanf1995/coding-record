#include <stdio.h>

int bindSearch(int x, int v[], int len);

int main() {
	int array[100];

	for (int i = 0; i < 100; i++) array[i] = i + 1;

	printf("21 in array: %d\n", bindSearch(21, array, 100));
	printf("15 in array: %d\n", bindSearch(15, array, 100));
	printf("59 in array: %d\n", bindSearch(59, array, 100));
	printf("82 in array: %d\n", bindSearch(82, array, 100));

	return 0;
}

int bindSearch(int x, int v[], int len) {
	int low, high, mid;

	low = 0;
	high = len - 1;

	while (low <= high)
	{
		mid = (low + high) / 2;
		if (x < v[mid]) high = mid - 1;
		else if (x > v[mid]) low = mid + 1;
		else return mid;
	}
	return -1;
}