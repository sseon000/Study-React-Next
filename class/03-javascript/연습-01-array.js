// �迭
const arr = ["�迭"];
const arr2 = ["�迭2"];

// �迭�� ���� ���ϱ�
arr.length;

// �迭�� �� ������
arr[0]; //����(�ε���)

// �迭 �� �ڿ� �� �߰�
arr.push();

// �迭 �� ������ �� ����
arr.pop();

// �迭 ��� ����
arr.sort();

// �迭 ������ Ȯ��
arr.includes("�迭"); //��

// �迭 2�� ����
arr.concat(arr2);

// �迭�� ���ڷ� �����
arr.join();

// �迭 �и�
arr.slice();

// �迭���� ���ϴ� ��� �̱�
// arr.filter();

// �迭�� ��� ��� ����
// arr.map();

// ���ڿ��� �迭ó�� �ٷ� �� �ִ�
// ���ڿ� �迭
const email = "codecamp@gmail.com";
email[0] = "c";
email[1] = "o";

/**********************�ǽ�**************************/ 
let classmates = ["ö��", "����", "����"]
// undefined
classmates
// (3)?['ö��', '����', '����']
classmates[0]
// 'ö��'
classmates[1]
// '����'
classmates[2]
// '����'
classmates.includes("����")
// true
classmates.includes("�ͱ�")
// false
classmates.length
// 3
classmates.push("�ͱ�")
// 4
classmates.includes("�ͱ�")
// true
classmates
// (4)?['ö��', '����', '����', '�ͱ�']
classmates.length
// 4
classmates.pop()
// '�ͱ�'
classmates
// (3)?['ö��', '����', '����']

/**********************quiz**************************/ 
/**
 * developer��� ������ �����, 
 * �ڽ��� ���ϴ� �����ڷ��� ���� Ű���尡 5�� ����ִ� �迭�� �Ҵ��� ��
 * ���� �߿��ϴٰ� �����ϴ� Ű���带 index�� �̿��Ͽ� �ֿܼ� ǥ���� ������
 */
let developer = ["Ŀ�´����̼�","ȣ���","Ʈ����","����","����",];
console.log(developer[0]);
/**
 * dream�̶�� ������
 * ["Ŀ��������","����","�Ҽ��ִ�"] �迭�� �Ҵ��� ��
 * developer �迭�� �ϳ��� ���� ������
 */
let dream = ["Ŀ��������","����","�Ҽ��ִ�"];
developer.concat(dream);
let result = developer.concat(dream); // ���ο� ������ �迭�� ��Ƽ� ��밡��

