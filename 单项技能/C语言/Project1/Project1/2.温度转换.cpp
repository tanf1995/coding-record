#include <stdio.h>

int fahrToCel() {
	// 当 fahr=0, 20, ..., 300 时，分别打印华氏温度和摄氏温度
	float fahr, celsius;
	float lower, upper, step;

	lower = 0;  // 温度表下限
	upper = 300; // 温度表上限
	step = 20; // 步长

	printf("华氏度\t摄氏度\n");
	fahr = lower;
	while (fahr <= upper)
	{
		celsius = 5.0 * (fahr - 32.0) / 9.0;
		printf("%3.0f\t%6.2f\n", fahr, celsius);
		fahr = fahr + step;
	}
	return 0;
};

void fahrToCel2() {
	float fahr, celsius;

	printf("华氏度\t摄氏度\n");
	for (fahr = 0; fahr <= 300; fahr = fahr + 20) {
		celsius = 5.0 * (fahr - 32.0) / 9.0;
		printf("%3.0f\t%6.2f\n", fahr, celsius);
	}
}

void celToFahr() {
	float celsius, fahr;
	float lower, upper, step;

	lower = 0;  // 温度表下限
	upper = 60; // 温度表上限
	step = 4; // 步长

	printf("摄氏度\t华氏度\n");
	celsius = lower;
	while (celsius <= upper)
	{
		fahr = (celsius * 9.0) / 5.0 + 32.0;
		printf("%2.0f\t%6.2f\n", celsius, fahr);
		celsius = celsius + step;
	}
}

void cellToFahr2() {
	float celsius, fahr;

	printf("摄氏度\t华氏度（倒序）\n");
	for (celsius = 60; celsius >= 0; celsius = celsius - 4) {
		fahr = (celsius * 9.0) / 5.0 + 32.0;
		printf("%2.0f\t%6.2f\n", celsius, fahr);
	}
}

int main() {
	fahrToCel();
	fahrToCel2();
	celToFahr();
	cellToFahr2();
}