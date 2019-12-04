package charactor;

import property.Armor;
import property.LifePotion;
import property.Weapon;

public abstract class Hero {
	String name;
	float hp;
	float armor;
	int moveSpeed;
	protected static String copyright = "版权归暴雪公司所有";
	public void getCopyright() {
		System.out.println(this.name + "的" + copyright);
	}
	public static void battle_win () {
		System.out.println("Hero battle win.");
	}
	// 父类静态方法，但是子类不重写
	public static void battle () {
		System.out.println("Hero battle");
	}
	
	// 当实例被垃圾回收时，会触发此方法
	public void finalize () {
		System.out.println("Hero被回收了");
	}
	
	// 用于比较两个对象的内容是否
//	public boolean equals (Object o) {
//		if (o instanceof Hero) {
//			Hero h = (Hero) o;
//			return this.hp == h.hp;
//		}
//		return false;
//	}
	
	// 抽象方法，父类定义抽象方法后，子类必须重新定义
	public abstract void attack();
	
	// 父类构造方法，无参数
	public Hero () {
		// System.out.println("Hero的无参数的构造方法");
	}
	public Hero (String name) {
		System.out.println("Hero的有一个参数的构造方法");
	}
	
	// 创建非静态内部类
	class BattleScore {
		int kill;
		int die;
		int assit;
		public void legendary() {
			if (kill > 9) System.out.println(name + "超神了！");
			else System.out.println(name + "继续努力！");
		}
	}
	
	// 创建静态内部类
	static class EnemyCrystal {
		int hp = 5000;
		
	}
	
	public static void main (String[] args) {
		ADHero SF = new ADHero();
		SF.name = "影魔";
		SF.hp = 465f;
		SF.armor = 6;
		SF.moveSpeed = 310;
		SF.physicAttack();
			
		APHero PUCK = new APHero();
		PUCK.name = "帕克";
		PUCK.hp = 395f;
		PUCK.armor = 3;
		PUCK.moveSpeed = 300;
		PUCK.magicAttack();
		
		ADAPHero ST = new ADAPHero();
		ST.name = "蓝猫";
		ST.hp = 422;
		ST.armor = 3.5f;
		ST.moveSpeed = 305;
		ST.physicAttack();
		ST.magicAttack();
		
		Support DZ = new Support();
		DZ.name = "暗影牧师";
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