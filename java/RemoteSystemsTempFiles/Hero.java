public class Hero {
	public Hero (String name) {
		System.out.println("һ���������캯��" + name);
		this.name = name;
	}
	public Hero () {
		this("����");
		System.out.println("�޲������캯��");
	}
	public String name;
	public int HP;
	public void attack(Hero ...heros) {
		String DAWN = "��";
		String AND = "��";
		String desc = "";
		System.out.println(heros.length == 0);
		if (heros.length == 0) desc = this.name + "�����˹���";
		else if (heros.length == 1) desc = this.name + "������" + heros[0].name;
		else {
			desc = this.name + "ͬʱ������";
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
		Hero TS = new Hero("����ĥ�����");
		Hero SB = new Hero("����ɭ");
		Hero ST = new Hero("�籩֮��");
		Hero SF = new Hero();
		SF.name = "Ӱħ";
		TS.attack(SF);
		TS.attack(SB);
		TS.attack(SB, TS, ST);
	}
}