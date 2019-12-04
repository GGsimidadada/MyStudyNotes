public class Hero {
	public Hero (String name) {
		System.out.println("一个参数构造函数" + name);
		this.name = name;
	}
	public Hero () {
		this("屠夫");
		System.out.println("无参数构造函数");
	}
	public String name;
	public int HP;
	public void attack(Hero ...heros) {
		String DAWN = "、";
		String AND = "和";
		String desc = "";
		System.out.println(heros.length == 0);
		if (heros.length == 0) desc = this.name + "发动了攻击";
		else if (heros.length == 1) desc = this.name + "攻击了" + heros[0].name;
		else {
			desc = this.name + "同时攻击了";
			for (int i = 0; i < heros.length; i++) {
				Hero hero = heros[i];
				if (i == 0) desc += hero.name;
				else if (i == heros.length - 1) desc += AND + hero.name;
				else desc += DAWN + hero.name;
			}
		}
		System.out.println(desc);
	}
	
	public static void main(String[] args){
		Hero TS = new Hero("受折磨的灵魂");
		Hero SB = new Hero("巴拉森");
		Hero ST = new Hero("风暴之灵");
		Hero SF = new Hero();
		SF.name = "影魔";
		TS.attack(SF);
		TS.attack(SB);
		TS.attack(SB, TS, ST);
	}
}