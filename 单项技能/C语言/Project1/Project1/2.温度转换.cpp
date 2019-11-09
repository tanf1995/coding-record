#include <stdio.h>

int fahrToCel() {
	// �� fahr=0, 20, ..., 300 ʱ���ֱ��ӡ�����¶Ⱥ������¶�
	float fahr, celsius;
	float lower, upper, step;

	lower = 0;  // �¶ȱ�����
	upper = 300; // �¶ȱ�����
	step = 20; // ����

	printf("���϶�\t���϶�\n");
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

	printf("���϶�\t���϶�\n");
	for (fahr = 0; fahr <= 300; fahr = fahr + 20) {
		celsius = 5.0 * (fahr - 32.0) / 9.0;
		printf("%3.0f\t%6.2f\n", fahr, celsius);
	}
}

void celToFahr() {
	float celsius, fahr;
	float lower, upper, step;

	lower = 0;  // �¶ȱ�����
	upper = 60; // �¶ȱ�����
	step = 4; // ����

	printf("���϶�\t���϶�\n");
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

	printf("���϶�\t���϶ȣ�����\n");
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