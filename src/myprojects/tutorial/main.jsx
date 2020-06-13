import React from 'react';

import './style.css';

const code_1 = `
import React from 'react';

export default function() {
    return <h1>Hello, world!</h1>
}
`.trim();

const code_2 = `
import SomeApp from './workpiece/someapp/main';
import ReduxApp from './workpiece/reduxapp/main';

import Tutorial from './myprojects/tutorial/main';
import HelloWorld from './myprojects/hello/main'; // #5

const PROJECTS = {
  SomeApp,
  ReduxApp,
  Tutorial,
  HelloWorld // #11
}

export default PROJECTS;

`.trim();

const code_3 = `
const PROJECTS = {
  SomeApp,
  ReduxApp,
  Tutorial, // в ES6 аналогично этому Tutorial: Tutorial,
  hi: HelloWorld
}
`.trim();

const Tutorial = () => {

    return(
      <div className="Tutorial">
        <h1>Туториал</h1>
      
        <p>
          <b>React Playground</b> дает очень простой способ организовать ваши мини-проекты в одном месте.<br />
          А также позволяет быстро переключатся между ними.<br />
          Прототипы, эксперименты, изучение, пет-проекты – все это можно делать в React Playground.
        </p>
      
        <h2>Добавление проекта</h2>
      
        <p>Папка содержащая ваши проекты имеет путь <span>src/myprojects</span>.</p>
        <p>Создайте в ней папку <span>helloworld</span>, а в этой папке создайте файл <span>main.jsx</span> со следующим кодом:</p>
      
        <pre>{code_1}</pre>

        <p>Далее откройте файл <span>src/config.js</span> и добавьте в него строчки <span>#5</span> и <span>#11</span>.</p>

        <pre>{code_2}</pre>

        <p>
          Готово!
          Теперь достаточно выбрать <span>"HelloWorld"</span> в выпадающем списке, который в верхнем правом углу экрана.
        </p>

        <p>
         Если все было сделано верно, то вы должны увидеть на экране результат рендера компонента <span>hello/main.jsx</span>
        </p>

        <p>
          В качестве имени проекта используется ключи из объекта <span>PROJECTS</span>.
          Но вы без проблем можете использовать любое другое имя на свое усмотрение.
          Учитывайте то, что ключ используется для формирования имени класса элемента, в котором рендирится проект: <span>class="Project Project__<i>Tutorial</i>"</span>
          Поэтому лучше именовать ключи так, чтобы получалось допустимое имя для CSS классах.
        </p>

        <p>Ниже в примере используется ключ <span>"hi"</span> в качестве имени проекта. Этот ключ используется в выпадающем списке.</p>

        <pre>{code_3}</pre>
      
        <h2>Заготовки</h2>

        <p>
          Вы можете использовать заготовки при добавлении новых проектов.
          Заготовки хранятся в папке <span>src/workpiece</span>, загляните в нее.<br/>
        </p>

        <p>
          В папке <span>workpiece</span> есть пару заготовок <span>someapp</span> и <span>reduxapp</span>, которые также можно выбрать в выпадающем списке.<br/>
        </p>

        <p>
          Использовать заготовки легко.
          Просто копируйте заготовку в <span>src/myprojects</span>, переименовывайте ее папку и добавляйте в конфиг.
          Вместо того, чтобы писать с нуля проект с Redux, достаточно быстрее использовать заготовку <span>reduxapp</span>, в которой подключен Redux.
        </p>

        <p>Также добавляйте свои заготовки для себя, также вы можете ими поделится с другими.</p>

        <h2>Стили</h2>

        <p>
          Если вы добавляете стили своему компоненту, то используйте в них селектор <span>.Project__ИмяПроекта</span>.<br />
          Для примера как тут: <span>src/myprojects/tutorial/style.css</span>.
          Иначе вы можете задеть стили других проектов.<br/>
        </p>

        <p>Кстати, вам никто не запрещает подключить и использовать CSS Modules или другие варианты.</p>
      

        <h2>Использование других библиотке</h2>

        <p>
          Если нужен какой-либо пакет, то без проблем делайте <span>npm install ...</span> из корня <span>react-playground</span>
        </p>
        
      </div>
    );
    
}

export default Tutorial;
