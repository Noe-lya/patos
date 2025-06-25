alert("Bienvenid@ a la peor entrevista de trabajo de tu vida");

let pregunta1 = prompt(
    "¿Por qué querés trabajar con nosotros?\n" +
    "1. Quiero plata\n" +
    "2. No sé\n" +
    "3. Porque sí\n"
);

switch (pregunta1) {
  case "1":
    alert("Sincericidia sos. Igual, eso no mejora el sueldo mínimo.");
    break;
  case "2":
    alert("Esa actitud indecisa te va a llevar lejos... lejos de un trabajo.");
    break;
  case "3":
    alert("Hermoso discurso, pero igual te vamos a pagar poco");
    break;
  default:
    alert("Esa opción no existe, como tus derechos laborales.");
}

let pregunta2 = prompt(
    "¿Cuáles son tus fortalezas?\n" +
    "1. Dormir\n" +
    "2. Comer\n" +
    "3. Ninguna\n" +
    "4. Soy amable, tengo paciencia\n"
);

switch (pregunta2) {
  case "1":
    alert("Que bueno porque tenemos un sillón libre en la sala de descanso. Espero que sea un chiste tu respuesta");
    break;
  case "2":
    alert("Para gordo, andá a laburar a Mc Donalds");
    break;
  case "3":
    alert("Al menos sos realista. Ya es más de lo que podemos decir del gerente.");
    break;
  case "4":
    alert("¿Quién te lo dijo, tu mamá?");
    break;
  default:
    alert("Esa opción no existe, como tus posibilidades de conseguir este trabajo.");
}

let pregunta3 = prompt(
    "¿Qué debilidad estás tratando de mejorar?\n" +
    "1. El vicio\n" +
    "2. La pereza\n" +
    "3. No tengo debilidades\n"
);

switch (pregunta3) {
  case "1":
    alert("Nosotros también, ¿me pasas el nivel 1089 del candy crush?");
    break;
  case "2":
    alert("El primer paso es admitirlo... El segundo es una lloradita y a seguir");
    break;
  case "3":
    alert("Seguro tu ex no piensa lo mismo….");
    break;
  default:
    alert("Esa opción no existe, como tu capacidad de autocrítica.");
}


let pregunta4 = prompt(
    "¿Cómo manejas el estrés?\n" +
    "1. Gritando\n" +
    "2. Me pongo a llorar\n" +
    "3. Con el volante\n" +
    "4. Tomando un descanso\n"
);

switch (pregunta4) {
  case "1":
    alert("Entonces deberías estar audicionando en el teatro")
    break;
  case "2":
    alert("Anda sacando turno con el psiquiatra");
    break;
  case "3":
    alert("Que gracioso que sos, no deberías estar en el circo? Payaso");
    break;
  case "4":
    alert("Suena maduro. Lástima que nadie lo sea acá.");
    break;
  default:
    alert("Esa opción no existe, como el aire acondicionado en esta oficina.");
}

let pregunta5 = prompt(
    "¿Dónde te ves en 5 años?\n" +
    "1. En una mansión\n" +
    "2. Viajando\n" +
    "3. Acá\n" +
    "4. En un trabajo que me guste\n"
);

switch (pregunta5) {
  case "1":
    alert("Suerte con eso. Nosotros también soñábamos...");
    break;
  case "2":
    alert("Suerte con eso. Nosotros también soñábamos...");
    break;
  case "3":
    alert("Qué falta de expectativas, estas encaminado para el puesto");
    break;
  case "4":
    alert("Suena interesante. Aunque probablemente nunca lo cumplas");
    break;
  default:
    alert("Esa opción no existe, como las ganas de venir un lunes");
}

let pregunta6 = prompt(
    "¿Preferís trabajar solo o en equipo?\n" +
    "1. Solo\n" +
    "2. En equipo\n" +
    "3. Me adapto\n"
);

switch (pregunta6) {
  case "1":
    alert("Perfecto. Tendrás una oficina. Pero en el sotáno. Ojo con la puerta que se traba bastante");
    break;
  case "2":
    alert("Buenas noticias, hay un grupo que necesita asistente");
    break;
  case "3":
    alert("Ambiguo. Como tu futuro en esta empresa.");
    break; 
  default:
    alert("Esa opción no existe, como los aumentos.");
}

let pregunta7 = prompt(
    "¿Qué harías si no estás de acuerdo con tu jefe?\n" +
    "1. Obedecería\n" +  
    "2. Nada\n" +
    "3. Buscaría una solución juntos\n"
);

switch (pregunta7) {
  case "1":
    alert("Sos un posible empleado ideal para puestos sin opinión");
    break;
  case "2":
    alert("Sos un posible empleado ideal para puestos sin opinión")
    break;
  case "3":
    alert("Qué rebelde wey, relax");
    break;
  default:
    alert("Esa opción no existe, como los jefes que escuchan.");
}

let pregunta8 = prompt(
    "¿Cómo organizás tu tiempo?\n" +
    "1. No suelo organizarme\n" +
    "2. Uso una agenda\n"
);

switch (pregunta8) {
  case "1":
    alert("Qué excelente, nosotros tambien somos un tiro al aire");
    break;
  case "2":
    alert("Eso suena a alguien que usa agenda, rarito");
    break;
  default:  
    alert("Esa opción no existe, como el equilibrio entre vida y trabajo en este lugar.");
}

let pregunta9 = prompt(
    " ¿Tenés experiencia en este tipo de trabajo?\n" +
    "1. No pero aprendo rápido\n" +
    "2. Sí, tengo experiencia en este mismo puesto\n"
);

switch (pregunta9) {
  case "1":
    alert("Perfecto. Nadie acá sabía nada cuando empezó y algunos seguimos sin saber");
    break;
  case "2":
    alert("Ah, genial. Entonces ya sabés cómo renunciar sin hacer mucho quilombo");
    break;
  default:
    alert("Esa opción no existe, como la motivación después de la tercer reunión del día.");
}

let pregunta10 = prompt(
    "¿Tenés alguna pregunta para nosotros?\n" +
    "1. ¿De cuánto es el sueldo?\n" +
    "2. ¿Cuándo y cuánto tiempo tendría de vacaciones?\n" +
    "3. Ninguna\n" 
);


switch (pregunta10) {
  case "1":
    alert("Acá se paga con experiencias y traumas. Le decimos ´combo emocional´");
    break;
  case "2":
    alert("Ya preguntando por vacaciones?  ni arrancaste y ya querés irte.")
    break;
  case "3":
    alert("Perfecto. Sin dudas, sin ambiciones, sin expectativas. Sos justo lo que buscamos para no ascender jamás.");
    break;
  default:
    alert("Esa opción no existe, como el respeto del horario de salida.");
}

alert("¡Gracias por hacernos perder el tiempo con tu entrevista!.\n");
