public class Principal {
    public static void P (boolean b1){
        int x;
        try{
            x = 1;
            if (b1){
                throw new Manejador1Exception();
            }
        }
        catch (Manejador1Exception e){
            x = x + 1;
        }
        finally{
            x = x + 4;
        }

    }

    public static void main(String[] args) {
        int x = 4,
        boolean b1 = true, b2 = false;
        try {
            if (!b1){
                throw new Manejador2Exception();
            }
        }
        catch (Manejador2Excepction e){
            x = x * 100;
        }
        finally{
            P(b1);
            System.out.println(x);
        }
    }
}

public class Manejador1Exception extends Exception{
    public Manejador1Exception(){
        super();
    }
}

public class Manejador2Exception extends Exception{
    public Manejador2Exception(){
        super();
    }
}