package charactor;

import property.Armor;
import property.LifePotion;
import property.Weapon;

public abstract class Hero {
	String name;
	float hp;
	float armor;
	int moveSpeed;
	protected static String copyright = "��Ȩ�鱩ѩ��˾����";
	public void getCopyright() {
		System.out.println(this.name + "��" + copyright);
	}
	public static void battle_win () {
		System.out.println("Hero battle win.");
	}
	// ���ྲ̬�������������಻��д
	public static void battle () {
		System.out.println("Hero battle");
	}
	
	// ��ʵ������������ʱ���ᴥ���˷���
	public void finalize () {
		System.out.println("Hero��������");
	}
	
	// ���ڱȽ���������������Ƿ�
//	public boolean equals (Object o) {
//		if (o instanceof Hero) {
//			Hero h = (Hero) o;
//			return this.hp == h.hp;
//		}
//		return false;
//	}
	
	// ���󷽷������ඨ����󷽷�������������¶���
	public abstract void attack();
	
	// ���๹�췽�����޲���
	public Hero () {
		// System.out.println("Hero���޲����Ĺ��췽��");
	}
	public Hero (String name) {
		System.out.println("Hero����һ�������Ĺ��췽��");
	}
	
	// �����Ǿ�̬�ڲ���
	class BattleScore {
		int kill;
		int die;
		int assit;
		public void legendary() {
			if (kill > 9) System.out.println(name + "�����ˣ�");
			else System.out.println(name + "����Ŭ����");
		}
	}
	
	// ������̬�ڲ���
	static class EnemyCrystal {
		int hp = 5000;
		
	}
	
	public static void main (String[] args) {
		ADHero SF = new ADHero();
		SF.name = "Ӱħ";
		SF.hp = 465f;
		SF.armor = 6;
		SF.moveSpeed = 310;
		SF.physicAttack();
			
		APHero PUCK = new APHero();
		PUCK.name = "����";
		PUCK.hp = 395f;
		PUCK.armor = 3;
		PUCK.moveSpeed = 300;
		PUCK.magicAttack();
		
		ADAPHero ST = new ADAPHero();
		ST.name = "��è";
		ST.hp = 422;
		ST.armor = 3.5f;
		ST.moveSpeed = 305;
		ST.physicAttack();
		ST.magicAttack();
		
		Support DZ = new Support();
		DZ.name = "��Ӱ��ʦ";
		DZ.hp = 326;
		DZ.armor = 1.3f;
		DZ.moveSpeed = 295;
		DZ.heal(PUCK);
		DZ.heal(null);
		DZ.getCopyright();
		
		BattleScore score = SF.new BattleScore();
		score.kill = 10;
		score.legendary();
	}
}