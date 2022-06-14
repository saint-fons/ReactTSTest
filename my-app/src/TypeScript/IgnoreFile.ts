export let wrongString: string =
  "This variable with Typescript Error";

/* // @ts-ignore */
wrongString = 10;
//Пример исключенияя ts файла. Ошибка в vs коде, но компилируется без ошибок
