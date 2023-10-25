import React, { memo } from 'react'
import { injectIntl } from 'react-intl'
import { string, object } from 'prop-types'
import { SliderLayout } from 'vtex.slider-layout';

import styles from './styles.css'


const MainSlider= props => {

    const sliderConfigurationProps = {
        itemsPerPage: 1,
        infinite: true,
        showNavigationArrows: 'never',
        showPaginationDots: 'always',
        arrowSize: 20,
    };

    const renderList = slide =>{
        let list=[slide.list1,slide.list2,slide.list3];
        let listColors = [slide.list1Color,slide.list2Color,slide.list3Color]
        list=list.filter(item=>item!='');
        if(list.length==0)
            return null

        return <ul>
            {
                list.map((item, idx)=>(<li key={`mainSlide-${idx}`} style={{color:listColors[idx]}}>{item}</li>))
            }
        </ul>
    }
    
    return <>
        <div className={styles.slideWrapper}>
            <div className={styles.slideDesk}>
                <SliderLayout {...sliderConfigurationProps}>
                    {
                        props.slides.map((item) => (
                            <div className={styles.slideItemWrapper} style={{backgroundColor:item.colorBackground}}>
                                <div className={styles.slideItemPartText}>
                                    <div className={styles.imageContainer}>
                                        <img src={item.imageDesktop1} alt={item.altImage}/>
                                    </div>
                                    <div className={styles.slideTextContainer}>
                                        <h1 style={{color:item.colorHead}}>{item.head}</h1>
                                        <h2 style={{color:item.colorSubhead}}>{item.subhead}</h2>
                                        {renderList(item)}
                                        <div className={styles.spacer}></div>
                                        <div className={`${styles.button}`} style={{borderColor:item.colorButton}}><a href={item.link} style={{color:item.colorButton}}>{item.textButton}</a></div>
                                    </div>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img src={item.imageDesktop2} alt={item.altImage}/>
                                </div>
                            </div>
                        ))
                    }
                </SliderLayout>
            </div>
            <div className={styles.slideMob}>
                <SliderLayout {...sliderConfigurationProps}>
                    {
                        props.slides.map((item) => (
                            <div className={styles.slideItemWrapper} style={{backgroundColor:item.colorBackground}}>
                                <div className={styles.slideItemPartText}>
                                    <div className={styles.imageContainer}>
                                        <img src={item.imageMobileTop} alt={item.altImage}/>
                                    </div>
                                    <div className={styles.slideTextContainer}>
                                        <h1 style={{color:item.colorHead}}>{item.head}</h1>
                                        <h2 style={{color:item.colorSubhead}}>{item.subhead}</h2>
                                        <div className={`${styles.button}`} style={{borderColor:item.colorHead}}><a href={item.link} style={{color:item.colorSubhead}}>{item.textButton}</a></div>
                                        <div className={styles.spacer}></div>
                                        {renderList(item)}
                                    </div>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img src={item.imageMobile} alt={item.altImage}/>
                                </div>
                            </div>
                        ))
                    }
                </SliderLayout>
            </div>
        </div>
    </>
}


const MemoizedMainSlider = memo(injectIntl(MainSlider))

MemoizedMainSlider.propTypes = {
    blockClass: string,
    headline: string,
    slides: object,
}

MemoizedMainSlider.defaultProps = {
    headline: '',
    slides: {},
}

MemoizedMainSlider.schema = {
    title: 'admin/editor.info-card.title',
    description: 'admin/editor.info-card.description',
    type: 'object',
    properties: {
        blockClass: {
            title: 'admin/editor.blockClass.title',
            description: 'admin/editor.blockClass.description',
            type: 'string',
            isLayout: true,
        },
        headline: {
            title: "Headline",
            description: "Texto General",
            type: "string",
            default: "",
            isLayout: true,
        },
        slides: {
            title: "slides",
            type: "array",
            minItems: 0,
            items: {
                head: {
                    title: "H1",
                    description: "Texto H1",
                    type: "string",
                    default: ""
                },
                subhead: {
                    title: "H2",
                    description: "Texto H2",
                    type: "string",
                    default: ""
                },
                altImage: {
                    title: "Alt",
                    description: "Atributo Alt de las imágenes",
                    type: "string",
                    default: ""
                },
                imageDesktop1: {
                    title: "Imagen Desktop 1",
                    description: "Imagen Desktop 1",
                    type: "string",
                    default: "",
                    widget: {
                        "ui:widget": "image-uploader"
                    }
                },
                imageDesktop2: {
                    title: "Imagen Desktop 2",
                    description: "Imagen Desktop 2",
                    type: "string",
                    default: "",
                    widget: {
                        "ui:widget": "image-uploader"
                    }
                },
                imageMobile: {
                    title: "Imagen Mobile",
                    description: "Imagen Mobile",
                    type: "string",
                    default: "",
                    widget: {
                        "ui:widget": "image-uploader"
                    }
                },
                imageMobileTop: {
                    "title": "Imagen Mobile Superior",
                    "description": "Imagen de color de fondo de la parte superior Mobile",
                    "type": "string",
                    "default": "",
                    "widget": {
                        "ui:widget": "image-uploader"
                    }
                },
                link: {
                    title: "Enlace",
                    description: "Enlace a donde redireccionará al dar click",
                    type: "string",
                    default: ""
                },
                textButton: {
                    title: "Texto botón",
                    description: "Texto del botón del slide",
                    type: "string",
                    default: "VER MÁS"
                },
                colorBackground:{
                    title: "Color de fondo",
                    description: "Color del fondo del slide",
                    type: "string",
                    default: "#e7e7e8"
                },
                colorHead:{
                    title: "Color del título",
                    description: "Color del título",
                    type: "string",
                    default: "#0433ff"
                },
                colorSubhead:{
                    title: "Color del subtítulo",
                    description: "Color del subtítulo",
                    type: "string",
                    default: "#000"
                },
                colorButton:{
                    title: "Color del botón",
                    description: "Color del borde del botón",
                    type: "string",
                    default: "#0433ff"
                },
                list1:{
                    title: "Listado 1",
                    description: "Item 1 del listado",
                    type: "string",
                    default: ""
                },
                list1Color:{
                    title: "Listado 1 (color)",
                    description: "Color del item 1 del listado",
                    type: "string",
                    default: "#000"
                },
                list2:{
                    title: "Listado 2",
                    description: "Item 2 del listado",
                    type: "string",
                    default: ""
                },
                list2Color:{
                    title: "Listado 2 (color)",
                    description: "Color del item 2 del listado",
                    type: "string",
                    default: "#000"
                },
                list3:{
                    title: "Listado 3",
                    description: "Item 3 del listado",
                    type: "string",
                    default: ""
                },
                list3Color:{
                    title: "Listado 3 (color)",
                    description: "Color del item 3 del listado",
                    type: "string",
                    default: "#000"
                },
            }
        }
    },
}

export default MainSlider