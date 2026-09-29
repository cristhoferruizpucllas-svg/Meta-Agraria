/* Meta-Agraria · contenido académico por unidad */
(function(){
  const special = {
    "Biología|Biología: ciencia de la vida": {
      summary:"La biología estudia a los seres vivos: su organización, funcionamiento, origen, evolución e interacción con el ambiente.",
      keys:["La célula es la unidad básica de la vida.","Los seres vivos intercambian materia y energía con el ambiente.","La biología usa el método científico para formular y contrastar explicaciones."],
      cards:[["¿Qué estudia la biología?","La vida: organización, funciones, origen, evolución y relaciones con el ambiente."],["Unidad básica de la vida","La célula."],["Método científico","Observación → pregunta → hipótesis → experimentación/análisis → conclusión."]]
    },
    "Biología|Composición química de la materia viva": {
      summary:"La materia viva contiene bioelementos y biomoléculas. El agua, las sales minerales y las moléculas orgánicas permiten la estructura y las funciones celulares.",
      keys:["Bioelementos principales: C, H, O, N, P y S.","Biomoléculas orgánicas: carbohidratos, lípidos, proteínas y ácidos nucleicos.","El agua destaca por su polaridad y su capacidad como solvente."],
      cards:[["Bioelementos primarios","C, H, O, N, P y S."],["Proteínas","Polímeros de aminoácidos con funciones estructurales, catalíticas, de transporte y regulación."],["Ácidos nucleicos","ADN y ARN; participan en el almacenamiento y expresión de la información genética."]]
    },
    "Biología|Estructura y función celular": {
      summary:"La célula organiza sus procesos mediante membrana, citoplasma y material genético. Las células procariotas y eucariotas presentan diferencias estructurales fundamentales.",
      keys:["La membrana plasmática regula el intercambio de sustancias.","Las células eucariotas poseen núcleo; las procariotas no tienen núcleo membranoso.","Orgánulos como mitocondrias, ribosomas y Golgi cumplen funciones específicas."],
      cards:[["Membrana plasmática","Bicapa lipídica con proteínas; regula el intercambio y la comunicación celular."],["Procariota vs. eucariota","La procariota no posee núcleo membranoso; la eucariota sí."],["Mitocondria","Orgánulo relacionado principalmente con la respiración celular y producción de ATP."]]
    },
    "Química|La materia": {
      summary:"La materia es todo aquello que posee masa y ocupa un lugar en el espacio. Se clasifica por su composición y puede experimentar cambios físicos o químicos.",
      keys:["Sustancia pura: composición definida; puede ser elemento o compuesto.","Mezcla: combinación física de sustancias; puede ser homogénea o heterogénea.","Los cambios químicos generan sustancias nuevas; los físicos no cambian la identidad química."],
      cards:[["Materia","Todo lo que tiene masa y ocupa un lugar en el espacio."],["Elemento","Sustancia formada por átomos del mismo número atómico."],["Mezcla","Combinación física de dos o más sustancias, separable por métodos físicos."]]
    },
    "Química|Estructura atómica": {
      summary:"El átomo está formado por un núcleo con protones y neutrones y una región electrónica donde se encuentran los electrones.",
      keys:["Número atómico Z = número de protones.","Número másico A = protones + neutrones.","En un átomo neutro, protones = electrones."],
      cards:[["Número atómico Z","Cantidad de protones del núcleo."],["Número másico A","Suma de protones y neutrones."],["Ion","Átomo o grupo con carga neta por pérdida o ganancia de electrones."]]
    },
    "Química|Enlaces químicos": {
      summary:"Los enlaces químicos mantienen unidos a los átomos. La naturaleza del enlace depende de cómo participan y se distribuyen los electrones de valencia.",
      keys:["Iónico: transferencia de electrones y atracción entre iones.","Covalente: compartición de pares electrónicos.","Metálico: electrones deslocalizados en una red de átomos metálicos."],
      cards:[["Enlace iónico","Atracción electrostática entre especies con cargas opuestas, generalmente tras transferencia electrónica."],["Enlace covalente","Compartición de pares de electrones entre átomos."],["Electrones de valencia","Electrones de la capa externa que participan en enlaces y reactividad."]]
    },
    "Química|Fuerzas intermoleculares": {
      summary:"Las fuerzas intermoleculares son atracciones entre moléculas o partículas y ayudan a explicar propiedades como puntos de ebullición, fusión y solubilidad.",
      keys:["Fuerzas de dispersión de London aparecen en todas las partículas.","Las interacciones dipolo-dipolo actúan entre moléculas polares.","El puente de hidrógeno es una interacción especialmente intensa cuando H está unido a N, O o F."],
      cards:[["Dipolo-dipolo","Atracción entre extremos parcialmente cargados de moléculas polares."],["London","Atracciones originadas por dipolos instantáneos; están presentes en todas las sustancias moleculares."],["Puente de hidrógeno","Interacción fuerte asociada a H enlazado a N, O o F y a un par libre de otra especie."]]
    },
    "Física|Vectores": {
      summary:"Un vector representa una magnitud con módulo, dirección y sentido. Se usa para describir desplazamiento, velocidad, aceleración y fuerza.",
      keys:["Módulo: tamaño de la magnitud.","Dirección: orientación de la recta de acción.","Sentido: hacia dónde apunta el vector."],
      cards:[["Vector","Magnitud física definida por módulo, dirección y sentido."],["Vector resultante","Vector suma que representa el efecto conjunto de varios vectores."],["Componentes","Proyecciones de un vector sobre ejes elegidos para facilitar cálculos."]]
    },
    "Física|Movimiento rectilíneo": {
      summary:"El movimiento rectilíneo describe cuerpos cuya trayectoria es una línea. Se analiza mediante posición, desplazamiento, velocidad y aceleración.",
      keys:["MRU: velocidad constante y aceleración cero.","MRUV: aceleración constante.","En MRUV: v = v₀ + at y Δx = v₀t + ½at²."],
      cards:[["MRU","Movimiento en línea recta con velocidad constante."],["MRUV","Movimiento rectilíneo con aceleración constante."],["Ecuación de posición en MRUV","Δx = v₀t + ½at²."]]
    },
    "Física|Leyes de Newton": {
      summary:"Las leyes de Newton relacionan el movimiento con las fuerzas. Son la base de la dinámica clásica.",
      keys:["Primera ley: si la fuerza neta es cero, el estado de movimiento no cambia.","Segunda ley: Fᵣ = ma.","Tercera ley: las fuerzas de acción y reacción son simultáneas, iguales y opuestas y actúan sobre cuerpos distintos."],
      cards:[["Segunda ley de Newton","Fᵣ = ma."],["Primera ley","Un cuerpo conserva reposo o MRU si la fuerza neta es cero."],["Acción-reacción","Par de fuerzas iguales y opuestas que actúan sobre cuerpos diferentes."]]
    },
    "Física|Trabajo y energía mecánica": {
      summary:"El trabajo cuantifica la transferencia de energía producida por una fuerza durante un desplazamiento. La energía mecánica combina energía cinética y potencial.",
      keys:["Trabajo de una fuerza constante: W = F·d·cosθ.","Energía cinética: Ec = ½mv².","Energía mecánica: Em = Ec + Ep."],
      cards:[["Trabajo","W = F·d·cosθ para una fuerza constante."],["Energía cinética","Ec = ½mv²."],["Energía mecánica","Suma de energía cinética y potencial."]]
    },
    "Geometría|El triángulo": {
      summary:"El triángulo es un polígono de tres lados. Sus ángulos internos suman 180° y sus lados cumplen desigualdades geométricas.",
      keys:["Suma de ángulos internos = 180°.","La suma de dos lados siempre es mayor que el tercero.","Triángulos: equilátero, isósceles, escaleno; y según ángulos, acutángulo, rectángulo u obtusángulo."],
      cards:[["Suma angular del triángulo","180°."],["Triángulo isósceles","Tiene dos lados congruentes y los ángulos de la base son iguales."],["Triángulo rectángulo","Tiene un ángulo de 90°."]]
    },
    "Geometría|La circunferencia": {
      summary:"La circunferencia es el conjunto de puntos del plano que están a igual distancia de un centro. Su estudio relaciona radio, diámetro, arcos y ángulos.",
      keys:["Diámetro = 2r.","Longitud de circunferencia = 2πr.","Área del círculo = πr²."],
      cards:[["Diámetro","Segmento que pasa por el centro y une dos puntos de la circunferencia: d = 2r."],["Longitud","L = 2πr."],["Área del círculo","A = πr²."]]
    },
    "Trigonometría|Razones trigonométricas de un ángulo agudo, resolución de triángulos rectángulos, ángulos horizontales y verticales": {
      summary:"En un triángulo rectángulo, seno, coseno y tangente relacionan un ángulo agudo con sus lados. Estas razones permiten resolver problemas de alturas y distancias.",
      keys:["sen θ = cateto opuesto / hipotenusa.","cos θ = cateto adyacente / hipotenusa.","tan θ = cateto opuesto / cateto adyacente."],
      cards:[["Seno","sen θ = opuesto / hipotenusa."],["Coseno","cos θ = adyacente / hipotenusa."],["Tangente","tan θ = opuesto / adyacente."]]
    },
    "Trigonometría|Identidades trigonométricas": {
      summary:"Las identidades trigonométricas son igualdades verdaderas para los valores donde están definidas. Permiten transformar expresiones y simplificar problemas.",
      keys:["Identidad fundamental: sen²θ + cos²θ = 1.","1 + tan²θ = sec²θ.","1 + cot²θ = csc²θ."],
      cards:[["Identidad fundamental","sen²θ + cos²θ = 1."],["Tangente","tan θ = sen θ / cos θ, cuando cos θ ≠ 0."],["Secante","sec θ = 1 / cos θ, cuando cos θ ≠ 0."]]
    },
    "Aritmética|Porcentaje": {
      summary:"El porcentaje expresa una cantidad como parte de 100. Es fundamental para aumentos, descuentos, variaciones y problemas comerciales.",
      keys:["p% = p/100.","p% de N = (p/100)N.","Aumento de p%: cantidad final = inicial(1 + p/100). Descuento de p%: final = inicial(1 - p/100)."],
      cards:[["Porcentaje","Una razón expresada sobre 100."],["Aumento porcentual","Final = inicial(1 + p/100)."],["Descuento porcentual","Final = inicial(1 - p/100)."]]
    },
    "Aritmética|Razones y proporciones": {
      summary:"Una razón compara dos cantidades mediante una división. Una proporción establece la igualdad entre dos razones.",
      keys:["Razón a:b representa a/b.","En una proporción a/b = c/d, el producto de extremos equivale al de medios: ad = bc.","Identifica primero las magnitudes que se están comparando."],
      cards:[["Razón","Comparación de dos cantidades mediante división."],["Proporción","Igualdad entre dos razones."],["Propiedad fundamental","Si a/b = c/d, entonces ad = bc."]]
    },
    "Álgebra|Leyes de exponentes": {
      summary:"Las leyes de exponentes permiten simplificar productos, cocientes y potencias con una misma base bajo las condiciones correspondientes.",
      keys:["aᵐ·aⁿ = aᵐ⁺ⁿ.","aᵐ/aⁿ = aᵐ⁻ⁿ, con a ≠ 0.","(aᵐ)ⁿ = aᵐⁿ."],
      cards:[["Producto de potencias","aᵐ·aⁿ = aᵐ⁺ⁿ."],["Cociente","aᵐ/aⁿ = aᵐ⁻ⁿ, a ≠ 0."],["Potencia de potencia","(aᵐ)ⁿ = aᵐⁿ."]]
    },
    "Álgebra|Factorización de polinomios": {
      summary:"Factorizar es expresar un polinomio como producto de factores. Se elige el método según la estructura algebraica.",
      keys:["Primero busca factor común.","Diferencia de cuadrados: a² − b² = (a−b)(a+b).","En trinomios, identifica patrones y verifica multiplicando."],
      cards:[["Factorización","Transformación de una suma o polinomio en producto de factores."],["Diferencia de cuadrados","a² − b² = (a−b)(a+b)."],["Regla de oro","Después de factorizar, multiplica los factores para verificar."]]
    },
    "Razonamiento Matemático|Orden de información": {
      summary:"Los problemas de orden de información exigen traducir condiciones verbales a relaciones de posición y luego ubicar los elementos sin contradicciones.",
      keys:["Representa posiciones con una línea, tabla o esquema.","Convierte cada condición verbal en una relación concreta.","Usa las restricciones más fuertes primero y verifica todas las condiciones al final."],
      cards:[["Estrategia","Representar el problema antes de probar alternativas."],["Condición","Dato del enunciado que restringe las posiciones posibles."],["Verificación","Comprobar que la solución cumple todas las condiciones."]]
    },
    "Razonamiento Verbal|Comprensión de textos": {
      summary:"Comprender un texto implica identificar su tema, idea principal, ideas secundarias, propósito y relaciones entre sus partes.",
      keys:["Tema: asunto general del texto.","Idea principal: afirmación central que organiza la información.","No confundas una idea secundaria o ejemplo con la tesis o idea central."],
      cards:[["Tema","Asunto general del que trata el texto."],["Idea principal","Idea central que resume lo esencial del texto."],["Inferencia","Conclusión que se obtiene a partir de información del texto, sin inventar datos."]]
    },
    "Historia|Desde la Primera Guerra Mundial (1914-1919) hasta la Revolución Rusa (1917)": {
      summary:"La Primera Guerra Mundial se desarrolló desde 1914 en un contexto de rivalidades imperialistas, alianzas, nacionalismos y carrera armamentista. En 1917 ocurrió la Revolución Rusa.",
      keys:["El asesinato de Francisco Fernando en Sarajevo fue el detonante inmediato de la guerra.","La guerra enfrentó a las Potencias Centrales y la Triple Entente, con cambios durante el conflicto.","En Rusia, la crisis bélica y social contribuyó a las revoluciones de 1917."],
      cards:[["Detonante de la Primera Guerra Mundial","Asesinato de Francisco Fernando en Sarajevo, en 1914."],["Revolución de 1917","Incluyó la Revolución de Febrero y la Revolución de Octubre."],["Tratado de Versalles","Tratado de 1919 que formalizó la paz con Alemania."]]
    },
    "Historia|La Guerra Fría (1945-1991) y la Guerra de Corea (1950-1953)": {
      summary:"La Guerra Fría fue una rivalidad político-ideológica, económica, militar y tecnológica entre Estados Unidos y la Unión Soviética y sus respectivos bloques, sin una guerra directa total entre ambas potencias.",
      keys:["Se desarrolló aproximadamente entre 1945 y 1991.","La Guerra de Corea (1950-1953) fue un conflicto armado dentro del contexto de la Guerra Fría.","La disolución de la URSS en 1991 suele considerarse el cierre del periodo."],
      cards:[["Bloques","EE.UU. lideró el bloque capitalista y la URSS el bloque socialista."],["Guerra de Corea","1950-1953; terminó con un armisticio y mantuvo dividida la península."],["Fin de la Guerra Fría","La disolución de la URSS en 1991 es un hito central."]]
    },
    "Geografía|La geografía como ciencia": {
      summary:"La geografía estudia el espacio geográfico y las relaciones entre sociedad, naturaleza y territorio. Integra enfoques físicos, humanos y regionales.",
      keys:["Geografía física: componentes naturales del espacio.","Geografía humana: población, actividades y organización social del espacio.","El espacio geográfico es dinámico y resulta de la interacción sociedad-naturaleza."],
      cards:[["Geografía física","Estudia componentes naturales como relieve, clima, aguas y suelos."],["Geografía humana","Analiza población, actividades económicas y organización territorial."],["Espacio geográfico","Espacio transformado y organizado por la interacción de sociedad y naturaleza."]]
    },
    "Geografía|El sistema solar": {
      summary:"El sistema solar está formado por el Sol y los cuerpos que orbitan a su alrededor, entre ellos planetas, planetas enanos, satélites, asteroides y cometas.",
      keys:["El Sol concentra la mayor parte de la masa del sistema solar.","Los ocho planetas se clasifican en interiores rocosos y exteriores gigantes.","Las órbitas planetarias son aproximadamente elípticas."],
      cards:[["Planetas interiores","Mercurio, Venus, Tierra y Marte; son rocosos."],["Planetas exteriores","Júpiter, Saturno, Urano y Neptuno."],["Sol","Estrella central del sistema solar y principal fuente de energía para la Tierra."]]
    },
    "Economía|Fundamentos de economía: definición, métodos, problema de la economía y política económica": {
      summary:"La economía estudia cómo las personas y sociedades asignan recursos escasos para satisfacer necesidades. La escasez obliga a elegir y genera costos de oportunidad.",
      keys:["Escasez: recursos limitados frente a necesidades múltiples.","Costo de oportunidad: mejor alternativa sacrificada al elegir.","La política económica comprende acciones del Estado sobre variables y objetivos económicos."],
      cards:[["Escasez","Recursos limitados frente a necesidades humanas múltiples."],["Costo de oportunidad","Valor de la mejor alternativa no elegida."],["Política económica","Conjunto de medidas que buscan alcanzar objetivos económicos y sociales."]]
    },
    "Economía|Teorías de la demanda, oferta y equilibrio de mercado": {
      summary:"La demanda representa las cantidades que los consumidores desean y pueden comprar; la oferta, las cantidades que los productores desean y pueden vender. El equilibrio se produce cuando ambas coinciden.",
      keys:["Ceteris paribus, un mayor precio suele reducir la cantidad demandada.","Ceteris paribus, un mayor precio suele aumentar la cantidad ofrecida.","El equilibrio ocurre donde cantidad demandada = cantidad ofrecida."],
      cards:[["Demanda","Relación entre precio y cantidad que consumidores desean y pueden adquirir."],["Oferta","Relación entre precio y cantidad que productores desean y pueden vender."],["Equilibrio","Punto donde cantidad demandada y ofrecida son iguales."]]
    }
  };

  const subjectFocus = {
    "Razonamiento Matemático":"resolver problemas mediante relaciones, patrones, lógica, conteo y estrategias de representación.",
    "Razonamiento Verbal":"comprender, relacionar y evaluar información lingüística con precisión.",
    "Aritmética":"trabajar con números, relaciones cuantitativas, proporciones y cálculo aplicado.",
    "Álgebra":"representar relaciones mediante expresiones, ecuaciones, funciones y estructuras algebraicas.",
    "Geometría":"analizar propiedades, relaciones métricas y posiciones de figuras geométricas.",
    "Trigonometría":"relacionar ángulos, longitudes y funciones trigonométricas para resolver problemas.",
    "Biología":"explicar procesos de los seres vivos desde el nivel molecular hasta el ecosistema.",
    "Química":"relacionar estructura, propiedades, transformaciones y cantidad de materia.",
    "Física":"describir fenómenos mediante magnitudes, leyes, modelos y relaciones matemáticas.",
    "Historia":"ordenar, relacionar y explicar procesos históricos considerando causas, cambios y consecuencias.",
    "Geografía":"analizar la organización del espacio y la interacción entre sociedad y naturaleza.",
    "Economía":"analizar decisiones, mercados, instituciones y uso de recursos escasos."
  };

  window.META_CONTENT = {
    get(subject, topic) {
      const key=subject+"|"+topic;
      if(special[key]) return special[key];
      return {
        summary:"En esta unidad estudiarás "+topic+". El objetivo es comprender sus conceptos fundamentales, reconocer sus relaciones principales y aplicarlos en ejercicios tipo CEPREUNALM.",
        keys:[
          "Define con precisión los conceptos y términos centrales de la unidad.",
          "Relaciona el tema con los conceptos anteriores y distingue casos parecidos.",
          "Practica aplicaciones y problemas hasta poder justificar cada paso."
        ],
        cards:[
          ["Concepto central",topic+"."],
          ["Enfoque",subject+" busca "+(subjectFocus[subject]||"comprender y aplicar los conceptos fundamentales de la unidad")+"."],
          ["Estrategia de estudio","Aprende la definición → identifica las relaciones clave → resuelve un ejemplo → practica sin mirar la solución."]
        ]
      };
    }
  };
})();