import image from './assets/js_pic.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
    
    new TitleBlock (
        'Конструктор сайтов на Java-Script',
        { tag: 'h2', styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '20px',
        }
    }),

    new TextBlock ('Это будет целый творческий проект написанный на чистом Java-Script.', { 
        styles: {  
            color: '#008080',
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            'font-size': '30px',
            'font-weight': 'bold',
            'text-decoration': 'none',
            'letter-spacing': '2px',
            padding: '10px',
        }
    }),
    
    new ColumnsBlock (
        [
        'Приложение на чистом Java-Script, без использования библиотек',
        'Минимальное использование HTML',
        'Java-Script - это просто и интересно',
        'Научись создавать любые UI своими руками'
    ],{ styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)' ,
        'text-align': 'center',
        'font-size': '25px',
        'font-weight': 'bold',
        'color': '#DAA520',
        }
    }),
    
    new ImageBlock (
        image,
        {
            styles: {
                padding: '10px 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyle:{
                width: '500px',
                height: 'auto',
            },
            alt: 'Picture'
        }

    )
]