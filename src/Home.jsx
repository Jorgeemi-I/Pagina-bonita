import { useState, useRef } from 'react';
import './Home.css';

export default function Home({ username, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartaActual, setCartaActual] = useState(null);
  const [textoEditable, setTextoEditable] = useState('');
  const [bloqueadoModal, setBloqueadoModal] = useState(false);
  const cartaRef = useRef(null);

  const apodos = ['Mi princesita hermosa', 'Mi cielito hermoso', 'Mi amorcito', 'Mi vidita preciosa', 'Mi amor', 'Mi vida', 'Mi corazon', 'Mi niña hermosa'];
  const saludo = new Date().getHours() < 12 ? "menos días" :
               new Date().getHours() < 19 ? "menas tardes" :
               "menas noches";

  const mensajeBonito =['Espero que hayas teniendo un día tan hermoso como tú.','Cada día que pasa, mi amor por ti crece más y más.',  '¡Te amo con todo mi corazón!❤️', 'Eres la razón de mi felicidad día a día.','No puedo esperar para verte y abrazarte pronto.','Eres mi todo, mi amor bonito.','Gracias por ser la luz de mi vida.','Quiero estár contigo todos los días de mi vida.','Eres mi inspiración, lo mejor y lo más bonito que tengo en la vida.','Contando los días para volvernos a ver.','Te extraño muchísio, mi amor :('];             
  const cartas = [
    { id: 1, titulo: 'Primera Cartita aquí, espero te guste❤️', mensaje: 'Holaaaaa holaaaaa, mi cielito hermoso, meno, veo que lograste entrar, tuve que ayudarte, pero ya estás aquí, y ya viste lo que preparé para ti, meno, talvez no me tomó tanto tiempo, pero esto, es para que no tengas que esperar tanto tiempo por tus cartitas, aunque si lo prefieres, puedes decirme y regresamos a escribirlas a mano🥺❤️ Y si, espero que te guste todo esto que he preparado para ti, y todo tiene una ventaja, talvez hayan cartitas más largas, como talvez algún día haya cartitas más cortas, pero quiero que sepas que esto lo hice con mucho amor, y si le echas un ojito, abajo puedes guardar la carita en tu teléfono, espero que te guste, mi cielito hermoso 🥺❤️🥰', fecha: '06/11', fechaCompleta: '2025-11-06', fec: '06 de Noviembre del 2025'},
    { id: 2, titulo: 'Espero que te guste, mi amor❤️', mensaje: 'Hola mi princesita hermosa, ya leíste la primera cartita, y cues espero que todo te haya gustado, desde cómo se ve, como se abre y todo, meno, cues que se note ahora que tienes un novio programador🙈❤️ talvez en algunos días veas cambios, actualizaciones, nuevos apartados, y quiero que sepas que cada uno de ellos, estarán hechos con el mismo amor y mismo cariño para ti, mi princesita hermosa, espero que cada función nueva te guste como espero te haya gustado esta, te amo, te amooooooooooo, te amoooooo, y se que dirás que pude haber hecho algo como esto antes, pero meno, ahora estoy un poquito más desocupado y espero en verdad que te guste 🥺❤️✨', fecha: '07/11', fechaCompleta: '2025-11-07', fec: '07 de Noviembre del 2025'},
    { id: 3, titulo: 'Todo es con mucho cariño para tí mi cielito❤️', mensaje: 'Holaaaaa, mi princesitaaaaaaa hermosaaaaaa, otra cartita más de estas, talvez algunos días, no pueda tener tiempo, y vas a ver, que talvez hayan cartitas que estén bloqueadas, y se desbloquearan, el día del que sean, aunque puedes intentar abrirlas si así lo prefieres 🙈❤️ Yo veo todo esto, y digo, owww que monito, y espero que digas lo mismo tú, lo meno de esto, es que como ves, podemos usar emojis para que se vea más bonito, y Sipis, ya viste que afuera también puedo poner una frase bonita? Meno, cues es igual como las cartitas a mano, la única diferencia es que ahora lo puedes guardar en tu teléfono, aunque esto no significa que no vayan a haber cartitas a mano, claro que lo habrán, así como me habías dicho, talvez una cada semana, una cada vez, aunque ese día también habrán cartitas por aquí, mi amor 🥺❤️✨', fecha: '08/11', fechaCompleta: '2025-11-08', fec: '08 de Noviembre del 2025'},
    { id: 4, titulo: 'Te amooo con todo mi corazon, mi cielito hermoso❤️', mensaje: 'Holaaaaa, mi cielito hermoso, meno, empezamos ya con las cartitas bonitas, se que dijiste, yaya mucha explicación JAJAJA🙈❤️ Pero meno, esta carita es diferente, mi cielito, recordándote nuevamente que eres lo que más amo en el mundo, que eres todo lo que quiero para mi futuro, te amoooo con toda el alma, y que quiero que estés conmigo para siempre, te amoooo mi cielito hermoso, me gustas muchísimo, me encantas demasiado, estoy súper enamorado de ti y de tus ojitos preciosos, me encanta ver tu carita toda preciosa, me encanta todo de ti, estoy y estaré obsesionado con mi noviecita preciosa, porque me encantas, mi amor y me encantas toda la vidaaaa, eres lo más bonito de mi vida, mi amor, y espero que todo esto y las nuevas caritas te gusten🥺❤️🙈', fecha: '09/11', fechaCompleta: '2025-11-09',fec: '09 de Noviembre del 2025' },
    { id: 5, titulo: 'Para la niña me que me hace muy feliz❤️', mensaje: 'Hola, mi cielito hermoso, sabes, aunque es algo que te digo siempre, nunca podré agradecerte todo lo que haces por mi, llegaste a hacer mi vida mas bonita y a llenarme de felicidad, te amo con toda mi alma, estaré eternamente agradecido contigo por hacerme el más feliz del mundo🥺❤️ te amo hoy, te amé ayer y ten por seguro que te amaré toda mi vida, porque me haces demasiado feliz y yo quiero igual hacerte muy feliz, quiero darte todo ese amor y todo lo que te mereces, y aunque tú te mereces muchísimo más de lo que seguramente yo puedo darte, prometo amarte más de lo que cualquier persona pueda hacerlo, te amo con toda mi alma, y ojala que nunca dudes del amor que te tengo, porque yo haría todo lo posible porque estés bien, aun así me cueste todo de mí, te amo con todo mi corazon y eso nunca, pero nunca va a cambiar. Besitos, mi cielito🥺❤️✨ ', fecha: '10/11', fechaCompleta: '2025-11-10', fec: '10 de Noviembre del 2025' },
    { id: 6, titulo: 'Para la niña que me hace sentir el más afortunado del mundo ❤️', mensaje: 'Hola mi princesita hermosa, meno, talvez no estés leyendo esto en la fecha, pero siempre dicen que el 11:11 es de la suerte, lo bonito es que desde que estás en mi vida, todos los días me siento afortunado por tenerte, a veces pienso en que fue lo que hice tan bien para que Diosito me mandara a alguien tan maravillosa como tú 🥺❤️ Como te lo digo siempre, hoy y todos los días le agradeceré a Diosito y a la vida por mandarte conmigo, porque ni yo sabía que necesitaba todo ese amor y felicidad que trajiste a mi vida, muchas gracias por ser la mejor noviecita del mundo, muchas gracias por darme más amor del que necesito, muchas gracias por siempre hacerme feliz y por siempre estar para mi, te amo con todo mi corazón y nunca nunca me cansaré de agradecerte todo lo que haces por mí, y de agradecerle a Diosito por mandarte a mi vida. Te amooooo con todo mi corazón y te juro que lo haré, cada día, cada minuto y cada segundo de mi vida. 🥹❤️', fecha: '11/11', fechaCompleta: '2025-11-11', fec: '11 de Noviembre del 2025' },
    { id: 7, titulo: 'Para la niña que me hizo amar la vida🥹❤️', mensaje: 'Hola holaaaa, amor de mi vida, meno aquí estoy otro día más con una cartita nueva para ti, sabes, todos los días pienso en ti, y me gusta, porque así me siento vivo, solo así pienso que mi propósito es hacerte feliz día con día, hacer que estés bien y amarte con todas las fuerzas de mi corazoncito, llegaste a hacer mi vida tan bonita, llegaste a hacer que todos los pensamientos malos que tenía desaparecieran, llegaste a hacerme valorar todos los días de mi vida porque ahora estás en ellos, llegaste a hacerme el niño más feliz del mundo y a demostrarme que el amar no siempre tiene que ser malo, y que dos personas se pueden amar de la misma intensidad, muchas gracias por hacerme ver el lado más bonito de la vida, contigo todos los atardeceres son bonitos y son la alegría de que al día siguiente habrá un nuevo día y no con la nostalgia de que es un día más existiendo y dejando pasar cosas importantes, por todas estás cosas y muchísimas más estaré agradecido contigo. Te amo y quiero pasar toda mi vida a tu ladito 🥹❤️✨', fecha: '12/11', fechaCompleta: '2025-11-12', fec: '12 de Noviembre del 2025'},
    { id: 8, titulo: 'Para la niña que me hace ser mejor todos los días 🥺❤️', mensaje: 'Holaaa holaaa, mi cielito hermoso, aquí me tienes un día más escribiendo una pequeña parte de todo esto que siento por ti, y como te lo digo siempre, te juro que te amaré toda la vida con toda mi vida, espero que nunca pienses que no te amo, porque haría lo que fuera para que te sientas amada y feliz, para que cada día en tu vida sea mas bonito que el anterior, todos los días de mi vida me esforzaré para ser lo mejor para ti, yo quiero que nunca desconfíes de mi, porque si lo haces, he fracasado como novio, porque yo quiero darte esa seguridad de que siempre serás la única mujer en mi vida (Hasta que lleguen las mini tú), yo solo quiero que siempre confíes en mi, y que puedas decirme lo que sientes, y si soy el que provoca eso con mucho más razón, porque siempre quiero hacerte sentir bien y la mujer más amada en el mundo, te amoooo, te amoooooooooooo, te amooooooooooooooo, y lo haré por siempre, Besitoooos. 🥺❤️✨', fecha: '13/11', fechaCompleta: '2025-11-13' , fec: '13 de Noviembre del 2025'},
    { id: 7, titulo: 'Para la niña con la que quiero todo🥹❤️', mensaje: 'Hola holaaaaa, mi vidita preciosa, ¿tú sabías que yo te amooo con todo mi corazón, que estoy muy enamorado de ti y que quiero pasar todos los días de mi vida a tu ladito? siii?? cues que bueno, porque no me cansaré de decírtelo y demostrártelo todos los días, para que sientas y veas que todo esto que siento por ti es verdadero, quiero que cada que me mires sepas que estaría dispuesto a lo que sea por ti, y quiero que en un futuro tengamos una familia muy bonita, que nuestros hijos se sientan amados y que vean que papá y mamá se aman mucho y que solo eso importa, quiero que sepas que no cambiaría eso por nada en el mundo, quiero vivir lo que me falta por vivir tomados de la mano, que toda la gente que nos vea diga "que bonita pareja hacen (así como ahorita 🥹❤️)" te amo y nunca dejaré de amarte, mi corazón solo late por ti, solo te quiere a ti y a ese futuro donde solo existamos los dos con nuestra familia bonita, te amoooo con todo mi corazón y jamás me cansaré de decirtelo. Besitos, mi cielito hermoso 🥺❤️✨' , fecha: '14/11', fechaCompleta: '2025-11-14', fec: '14 de Noviembre del 2025' },
    { id: 8, titulo: 'Para la niña con la que tengo la mejor relación que pudiera desear🥹❤️', mensaje: 'Holaaaa holaaaa, mi cielito hermoso, aquí me tienes un día más, y meno, hoy quiero decirte como otros tantos días, que siempre estaré para ti y que puedes confiar en mi para lo que sea, quiero que tengamos una buena comunicación y seguir llevando nuestra relación tan bonita como lo hemos hecho hasta hoy, quiero que sepas también, que uno no siempre tiene el control sobre lo que pasa, y que eso no tiene porque se motivo de sentirse mal, si no que sea algo del que podamos aprender, y saber que no siempre las cosas van a ser como queremos y eso no quiere decir que algo vaya mal, así mismo con lo que pase en nosotros, sé que hemos llevado todo esto de una manera increíble y estoy consiente de que no digo que hoy o mañana, si no algún día talvez discutiremos por algo y lo que quiero es que dialoguemos, que no discutamos y que tampoco lo guardemos solo para nosotros mismos, porque lo mejor que podemos hacer es tener una relación sana, en que los problemas se dialoguen y no se discutan o se escondan, al igual que debemos saber que hay cosas externas en las que no tenemos el control, pero podemos intentar otra vez y no dejar que nos sintamos tristes por ello. Te amo con toda mi alma y quiero que estés bien siempre🥺❤️✨ ', fecha: '15/11', fechaCompleta: '2025-11-15', fec: '15 de Noviembre del 2025'},
    { id: 9, titulo: 'Para la niña que ha sido el amor de mi vida incluso antes de conocernos 🥹❤️', mensaje: 'Holaaaa mi cielito hermoso, un nuevo día y una cartita nueva para ti, solo quiero que sepas que te sigo amando como siempre pero con más intensidad, porque mi amor por ti solo crece y meno, espero que leas estas cartitas llenas de amor, así como yo al escribirlas, eres mi prioridad en todo, si yo algún día me siento mal y tú también, pues ya no lo estaré más, porque solo me importa el que estés bien, y en que yo pueda hacerte sentir bien, porque eres lo más importante de mi vida, porque lo eres todo para mi, y así ha sido siempre desde que llegaste a mi vida, ahora y siempre serás el amor de mi vida y también lo eras antes de conocernos, siempre lo fuiste y siempre lo serás, te amo con toda mi alma, quiero que nunca lo olvides y que nunca lo dudes, porque me esforzaré todos los días para demostrarte mi amor y hacerte sentir muy amada, eres mi prioridad, mi felicidad y espero ser tu felicidad para toda la vida, te amo con todo mi corazón, nunca lo olvides y nunca lo dudes, porque me arrancaría el corazón solo para demostrarte este infinito amor que te tengo, te amo, te amoooooo, te amoooooooooo y eso nada ni nadie lo cambiará. Besitos, amor de mi vida 🥹❤️✨', fecha: '16/11', fechaCompleta: '2025-11-16', fec: '16 de Noviembre del 2025'},
    { id: 10, titulo: 'Para la niña que me hace el hombre más feliz del mundo 🥹❤️', mensaje: 'Holaaaaa mi cielito hermoso, otro día más y una cartita nueva para ti, meno, quiero que sepas que solo el decirte mi amor, llamarte mi cielito hermoso y mi princesita hermosa, me hace ya el hombre más feliz del mundo, y no puedes ni imaginar lo increíblemente feliz que me hace pensar en un futuro a tu lado en el que seamos nosotros y nuestra familia bonita, me haces feliz con solo existir, eres todo lo que desearé por el resto de mi vida, eres absolutamente todo para mi, y el que tu estés feliz me hace feliz, por eso prometo estar contigo en las buenas, en las malas, en los momentos en los que creas que no tienes a nadie, porque siempre podrás contar conmigo, te amooooo infinitamente, mi princesita hermosa y quiero hacerte feliz así como me haces feliz a mí, te amo con todas las fuerzas de mi corazón y quiero estar contigo siempre para poder demostrártelo, eres lo mas valioso en mi vida. Besitos, mi princesita hermosa🥹❤️✨', fecha: '17/11', fechaCompleta: '2025-11-17', fec: '17 de Noviembre del 2025' },
    { id: 11, titulo: 'Para la niña que me hace sentir muy especial y amado🥹❤️', mensaje: 'Holaaaaa, mi cielito hermoso, meno, primero que nada quiero agradecerte por todo, y por hacer de este día, algo muy bonito (aunque contigo todos los días son perfectos), gracias por hacerme sentir tan especial, por hacerme sentir tan amado, eres lo mejor que me pasó y me pasará en la vida, muchas gracias, por todo mi princesita hermosa, no tendré las palabras suficientes, para agradecer todo lo que haces por mi, muchas gracias, por estar siempre contigo, y si, mis deseos siempre son que puedas estar para siempre a mi lado, que pase lo que pase jamás te vayas de mi ladito y que siempre, puedas contar conmigo, te amooo infinitamente, mi cielito hermoso, eres lo mejor de mi vida, siempre lo serás, te amo con todas la fuerzas de mi corazón, y gracias por amarme tal y como soy, gracias por hacerme sentir alguien especial, te amooo, te amooo, te amooooooooooo y te amaré todos los días de mi vida, quédate conmigo y tengamos la familia más bonita del mundo, besitos 🥹❤️✨', fecha: '18/11', fechaCompleta: '2025-11-18', fec: '18 de Noviembre del 2025' },
    { id: 12, titulo: 'Para la niña que lo es todo para mí🥹❤️', mensaje: 'Holaaaaa, mi cielito hermoso, aquí estoy otro día más, con una cartita nueva para ti, y meno, quería recordarte lo mucho que te amooooooooooo, lo importante que eres para mí y que sin ti soy nadie, muchas gracias, por ser la mejor noviecita del mundo, gracias por demostrarme que el amor es bonito y maravilloso, gracias por demostrarme que una persona puede amar a otra más de lo que espera, muchas gracias por hacerme tan feliz y por absolutamente todo, te agradezco con toda el alma todo lo que haces por mí y si, se que no me alcanzaría está vida para agradecerte, así como no me alcanzaría para demostrarte lo mucho que te amo, porque te amo con todo el corazón, y toda el alma, muchas gracias por todo, prometo amarte con la misma intensidad de siempre e incluso más, porque quiero que te sientas amada por mi todos los días de tu vida, te amooo, besitos 🥺❤️✨', fecha: '19/11', fechaCompleta: '2025-11-19', fec: '19 de Noviembre del 2025' },
    { id: 13, titulo: 'Para la niña que amo más y más cada día🥺❤️', mensaje: 'Holaaaaa mi cielito lindo, aquí estoy nuevamente con otra cartita para ti, meno, quiero recordarte como siempre que eres lo más importante, lo más bonito, lo mejor y el amor de mi vida, que lo eres todo para mí y que te amo con toda mi alma, y así siempre lo será, mi amor por ti aumenta más y más cada día, te amo más que ayer, pero no más que mañana, te amo con todo el corazón y con toda el alma, eres todo lo bonito que puede existir, tus ojos tan hermosos y toda tú tan preciosa, me tienen enamorados, me encanta absolutamente todo el de ti y estoy seguro que así será toda la vida, porque cada día me doy aún más cuenta que eres todo lo que quiero, que eres todo lo que necesito, que sin ti no viviría, lo eres todo para mí, y no pienso en que en algún momento te irás, eso me aterra, porque quiero estar todos los días de mi vida contigo, te amooo, mi cielito hermoso 🥺❤️🥰', fecha: '20/11', fechaCompleta: '2025-11-20', fec: '20 de Noviembre del 2025' },
    { id: 14, titulo: 'Para la niña a la que le agradezco mi vida🥹❤️', mensaje: 'Holaaaaa, amor de mi vida, soy yo de nuevo y aquí estoy con una cartita nueva, meno, hoy como casi siempre, te agradezco a ti, a la vida y a Diosito por aparecer en mi vida, gracias, por todo lo que haces por mí día con día, gracias, por hacerme el hombre más feliz del mundo, gracias por hacerme sentir especial, gracias por todos los bonitos tratos que me das, gracias por mostrarme que en realidad me amas, gracias por absolutamente todo, mi niña hermosa, no me alcanzan las palabras para agradecerte todo lo que haces por mí, eres la mejor noviecita del mundo, y no cabe duda que Diosito te mandó conmigo para que cuide de ti, de tu corazoncito y tú del mío, y te prometo que eso es lo que haré, porque quiero que así como me haces sentir, yo también te haga sentir, poque lo eres todo en mi vida, poque quiero que siempre quieras estar contigo, y poque quiero que sientas todo lo bonito que yo siento, te amooo infinitamente, mi princesita hermosa 🥹🥹❤️ ', fecha: '21/11', fechaCompleta: '2025-11-21', fec: '21 de Noviembre del 2025' },
    { id: 15, titulo: 'Para la niña a la que todos los días le demostraré que la amo y que me encanta🥹❤️', mensaje: 'Holaaaaa holaaaaa, amor de mi vida, ¿Sabías que te amo mucho, que eres lo más importante y el amor de mi vida? ¿Siii? Que meno la verdad, porque haré mi esfuerzo todos los días para demostrártelo y que sientas lo mucho que te amo y notes todo el amor que tengo para darte, te amoooo, me gustas, me encantas, y quiero que se note, quiero que todo mundo sepa, que estoy enamorado de ti, que me fascinas, y que eres lo mejor que me pudo haber pasado, quiero que todos sepan que eres mi noviecitaaaa, poque me hace sentir orgulloso tener una niña tan linda e increíble como tú, que eres la niña más preciosa, hermosa, maravillosa, la más increíble y maravillosa del mundo, te amooooooooooo con toda el alma y quiero que nunca lo olvides, yo me encargaré de recordártelo día con día, porque quiero que siempre lo tengas presente y que nunca dudes del gran amor que te tengo, mi princesita hermosa 🥺❤️✨', fecha: '22/11', fechaCompleta: '2025-11-22', fec: '22 de Noviembre del 2025' },
    { id: 16, titulo: 'Para la niña, que quiero que esté bien siempre🥺❤️', mensaje: 'Holaaaaa holaaaaa, mi princesita hermosa, un día más y una cartita nueva para ti, meno, al igual que todos los días, te recuerdo que te amoooooooooo mucho, que eres lo mejor y el amor de mi vida, meno, la cartita de hoy, es para recordarte, que tienes que tomar mucha agüita, que tienes que comer muy bien, para que estés sanita y fuerte, poque si te enfermas no cuedo estar todo el día a tu ladito para cuidarte muy bien, así que no olvides tomar mucha agüita, comer muy bien y cuidarte demasiado, así cuando yo esté contigo, te cuidaré muchote, poque eres mi niña chiquita, poque eres lo más importante de mi vidaaaaaaaa, te amoooo y prometo cuidarte con mi vida, prometo hacer que conmigo te sientas segura, y también mentalmente, poque no quiero que en algún momento desconfíes de mí, o pienses cosas extrañas, así que yo me encargaré de cuidar tu corazoncito y a tí para siempre 🥺❤️🙈', fecha: '23/11', fechaCompleta: '2025-11-23', fec: '23 de Noviembre del 2025' },
    { id: 17, titulo: 'Felices 2 añitos mi cielito hermoso🥺🥺❤️', mensaje: 'Holaaa holaaa mi cielito hermoso, otra día más, una cartita nueva, pero hoy, no es cualquier día, hoy es un día muy especial, hoy es uno de los días más maravilloso en mi vida (todos los días bonitos y maravillosos en mi vida son gracias a ti) y si, hoy es un día muy especial, hoy, tú y yo hacemos dos añitos de novios, Yeeeeeeeeeeiiii 🥺❤️ dos añitos en lo que todo ha ido de maravilla, dos añitos llenos de amor, de felicidad y de cosas muy bonitas y maravillosas, feliz de que estemos cumpliendo dos añitos, quien iba a pensar que el Jorge de hace dos años le costaba pedirte que fueras su noviecita, y ahora míralo, haciendo de todo contigo, que bonito es absolutamente todo si estamos juntitos, quiero que toda la vida estemos juntitos, quiero que siempre y que pase lo que pase, nunca nos separemos, quiero llegar contigo a ese día en el que tengas que decir "si, acepto" quiero llegar contigo a ese día en el que veamos a nuestros hijitos corriendo por toda la casa, siendo una familia muy unida y que tengan todo ese amor que a nosotros talvez nos faltó, Pero quiero vivir todo eso a tu lado, quien iba a pensar, que dos desconocidos, que talvez son completamente diferentes pero tan completamente iguales, se llegarán a conocer de la manera en la que nos conocimos, y que tengan la relación más bonita del mundo, que siempre hagan todo lo posible por demostrarse el amor que se tienen, quiero que toda la vida sea así, que siempre nos hagamos saber, que nos amamos el uno al otro, que nos demostremos lo especial que somos para cada uno, que siempre siempre, nos demostremos todo este amor que tenemos, te amo, me encantas y me encantaría pasar todos los días de mi vida a tu lado, por favor quédate conmigo, cumplamos todo eso tan bonito que siempre platicamos, hagamos que se vuelva realidad y que no estemos por siempre juntitos, que vayamos a todos lados agarrados de la mano, que hagamos que todas la cosas sean bonitas, porque te juro que solo contigo quiero estar, que solo contigo quiero vivir eso que planeamos, te amooo y felicidades a nosotros por estos dos añitos llenos de felicidad 🥹❤️✨', fecha: '24/11', fechaCompleta: '2025-11-24', fec: '24 de Noviembre del 2025' },
    
  ];

  // Función para verificar si una carta está desbloqueada
  const estaDesbloqueada = (fechaCompleta) => {
    // Obtener fecha actual en formato YYYY-MM-DD
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const fechaHoyStr = `${año}-${mes}-${dia}`;
    
    // Comparar strings directamente (más confiable)
    const desbloqueada = fechaHoyStr >= fechaCompleta;
    
    console.log('Fecha hoy:', fechaHoyStr);
    console.log('Fecha carta:', fechaCompleta);
    console.log('¿Desbloqueada?:', desbloqueada);
    
    return desbloqueada;
  };

  const abrirCarta = (carta) => {
    if (!estaDesbloqueada(carta.fechaCompleta)) {
      setCartaActual(carta);
      setBloqueadoModal(true);
      return;
    }

    setCartaActual(carta);
    setTextoEditable(carta.mensaje);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setCartaActual(null);
  };

  const cerrarBloqueado = () => {
    setBloqueadoModal(false);
    setCartaActual(null);
  };

  const guardarComoImagen = async () => {
    // Importar html2canvas dinámicamente
    const html2canvas = (await import('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/+esm')).default;
    
    if (cartaRef.current) {
      // Encontrar el textarea y guardarlo temporalmente
      const textarea = cartaRef.current.querySelector('.carta-texto');
      const textoOriginal = textarea.value;
      
      // Crear un div temporal con el texto formateado
      const divTemporal = document.createElement('div');
      divTemporal.className = 'carta-texto-captura';
      divTemporal.style.cssText = `
        width: 100%;
        min-height: 300px;
        padding: 20px;
        font-size: 18px;
        line-height: 1.8;
        color: #374151;
        font-family: 'Sour Gummy', -apple-system, BlinkMacSystemFont, sans-serif;
        font-weight: 400;
        white-space: pre-wrap;
        word-wrap: break-word;
      `;
      divTemporal.textContent = textoOriginal;
      
      // Reemplazar temporalmente el textarea con el div
      textarea.style.display = 'none';
      textarea.parentNode.insertBefore(divTemporal, textarea);
      
      // Esperar un momento para que se renderice
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Capturar la imagen
      const canvas = await html2canvas(cartaRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true,
      });
      
      // Restaurar el textarea
      divTemporal.remove();
      textarea.style.display = 'block';
      
      // Descargar la imagen
      const link = document.createElement('a');
      link.download = `carta-${cartaActual.id}-${Date.now()}.jpg`;
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    }
  };

  return (
    <div className="home-container">
      {/* Header con menú desplegable */}
      <header className="home-header">
        <h1 className="header-title">Cartitas para mi noviecita</h1>
        
        <div className="menu-container">
          <button 
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="12" cy="5" r="1"/>
              <circle cx="12" cy="19" r="1"/>
            </svg>
          </button>
          
          {menuOpen && (
            <div className="dropdown-menu">
              <button className="menu-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                Te amo, preciosa
              </button>
              <div className="menu-divider"></div>
              <button className="menu-item logout-item" onClick={onLogout}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Contenido principal */}
      <div className="home-content">
        <div className="welcome-section">
          <h2 className="welcome-title">¡Hola {apodos[Math.floor(Math.random() * apodos.length)]}, {saludo}! ❤️</h2>
          <p className="welcome-subtitle">{mensajeBonito[Math.floor(Math.random() * apodos.length)]}</p>
        </div>

        {/* Grid de sobres */}
        <div className="cartas-grid">
          {cartas.map((carta) => {
            const desbloqueada = estaDesbloqueada(carta.fechaCompleta);
            return (
              <div 
                key={carta.id} 
                className={`carta-sobre ${!desbloqueada ? 'carta-bloqueada' : ''}`} 
                onClick={() => abrirCarta(carta)}
              >
                <div className="sobre-wrapper">
                  {!desbloqueada && (
                    <div className="candado-overlay">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                  )}
                  <div className="sobre-flap">
                    <div className="flap-decoration"></div>
                  </div>
                  <div className="sobre-body">
                    <div className="sobre-sello">
                      <span className="sello-fecha">{carta.fecha}</span>
                    </div>
                    <div className="sobre-lineas">
                      <div className="linea"></div>
                      <div className="linea"></div>
                      <div className="linea"></div>
                    </div>
                    <div className="sobre-content">
                      <h3 className="carta-titulo">{carta.titulo}</h3>
                      <button className="leer-button">
                        {desbloqueada ? 'Abrir Cartita' : 'Cartita bloqueada'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal de carta bloqueada */}
      {bloqueadoModal && (
        <div className="modal-overlay" onClick={cerrarBloqueado}>
          <div className="modal-bloqueado" onClick={(e) => e.stopPropagation()}>
            <div className="bloqueado-icono">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h2 className="bloqueado-titulo">Cartita Bloqueada 🔒</h2>
            <p className="bloqueado-mensaje">
              Esta cartita estará disponible el <strong>{cartaActual?.fecha}</strong> preciosa.
            </p>
            <p className="bloqueado-submensaje">
              ¡Ten paciencia mi amor! 💜
            </p>
            <button className="bloqueado-button" onClick={cerrarBloqueado}>
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Modal de carta normal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Carta para capturar */}
            <div className="carta-container" ref={cartaRef}>
              <div className="carta-papel">
                <div className="carta-header">
                  <h2 className="carta-titulo-modal">{cartaActual?.titulo}</h2>
                  <div className="carta-decoracion">
                    <span>❤️</span>
                    <span>❤️</span>
                    <span>❤️</span>
                  </div>
                </div>
                
                <textarea
                  className="carta-texto"
                  value={textoEditable}
                  onChange={(e) => setTextoEditable(e.target.value)}
                  placeholder=""
                  rows="12"
                />
                
                <div className="carta-footer">
                  <p className="carta-firma">Con amor, para mi noviecita preciosa ❤️</p>
                  <div className="carta-fecha">
                    {/* {new Date().toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })} */}
                    {cartaActual?.fec}
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="modal-actions">
              <button className="action-button save-button" onClick={guardarComoImagen}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Guardar cartita
              </button>
              <button className="action-button cancel-button" onClick={cerrarModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}