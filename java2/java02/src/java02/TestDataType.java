package java02;

import java.math.BigInteger;
import java.math.BigDecimal;

public class TestDataType {
	public static void main (String[] args) {
		BigDecimal bd = BigDecimal.valueOf(1.0);
		bd = bd.subtract(BigDecimal.valueOf(0.1));
		bd = bd.subtract(BigDecimal.valueOf(0.1));
		bd = bd.subtract(BigDecimal.valueOf(0.1));
		bd = bd.subtract(BigDecimal.valueOf(0.1));
		bd = bd.subtract(BigDecimal.valueOf(0.1));
		System.out.println(bd);
		System.out.println(1.0 - 0.1 - 0.1 - 0.1 - 0.1 - 0.1);
		
		BigDecimal bd2 = BigDecimal.valueOf(0.1);
		BigDecimal bd3 = BigDecimal.valueOf(1.0 / 10.0);
		System.out.println(bd2.equals(bd3));
		System.out.println(0.1 == 1.0 / 10.0);
	}
}
