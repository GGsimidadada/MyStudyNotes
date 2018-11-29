package charactor;

public class ADHero extends Hero implements AD {
	@Override
	public void physicAttack () {
		System.out.println(this.name + "进行物理攻击");
	}
	
	@Override
	public void attack () {
		System.out.println(this.name + "发动了攻击");
	}
	
	// 隐藏父类静态方法
	public static void battle_win () {
		System.out.println("ADHERO battle win.");
	}
	
	// 子类构造方法
	public ADHero () {
		//super(null);
		System.out.println("ADHero 的构造方法");
	}
}