Prog Principal;
DCL x INTEGER; 
DCL b1,b2 BOOLEAN;
    PROC P (b1 BOOLEAN);
    DCL x INTEGER;
    BEGIN
        ON CONDITION Manejador1 BEGIN SET x = ARITH(x + 1); END; 
        SET X = 1;
        IF b1=true THEN 
            SIGNAL CONDITION Manejador1
        SET x = ARITH(x+4);
    END;

BEGIN
    ON CONDITION Manejador2 BEGIN SET x = ARITH(x * 100); END;
    SET X = 4;
    SET b2 = true;
    SET b1 = false;
    IF b1=false THEN SIGNAL CONDITION Manejador2
    CALL P(b1);
    WRITE (x);
END.