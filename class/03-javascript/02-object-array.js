/*********************quiz******************/
/**
 * �迭 �� ��ü�� �̿��� 1~10 ���� ����ϱ�
 */
const fruits = [
    {number: 1, title: "������"},
    {number: , title: "���θӽ�Ĺ"},
    {number: 3, title: "��û����"},
    {number: 4, title: "�Ѷ��"},
    {number: 5, title: "���"},
    {number: 6, title: "���ø���"},
    {number: 7, title: "����"},
    {number: 8, title: "õ����"},
    {number: 9, title: "���ϼ�������"},
    {number: 10, title: "��"},
]
// �� ��
fruits.forEach(n => {
    console.log(n.number + " " + n.title)
})

//  1 ������
//  2 ���θӽ�Ĺ
//  3 ��û����
//  4 �Ѷ��
//  5 ���
//  6 ���ø���
//  7 ����
//  8 õ����
//  9 ���ϼ�������
//  10 ��

// �ؼ� -> ���� �ݺ����� ���� �� �ܰ�� �̷��� ���...
fruits[0].number + " " + fruits[0].title
// '1 ������'
fruits[1].number + " " + fruits[1].title
// ' ���θӽ�Ĺ'