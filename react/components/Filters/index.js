import React, { useEffect, useState } from "react";
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'
import { Toggle } from 'vtex.styleguide'
import styles from './styles.css'


const Filters = () => {
    const useSearch = useSearchPage();

    console.log('Use Search!! ',useSearch);

    const PRICE_SHIPPING=500;
    const PRICE_MSI=1000;
    const [freeShipping,setFreeShipping]=useState(false);
    const [msi, setMsi]=useState(false);
    const [discounts, setDiscounts]=useState(false);

    const maps={
        'c':'category-1',
        'c,c':'category-1,category-2',
        'c,c,c':'category-1,category-3',
        'ft':'ft'
    }

    useEffect(()=>{
        if(useSearch && useSearch.priceRange){
            const priceRange=parseInt(useSearch.priceRange.split(' ')[0]);
            if(priceRange>=PRICE_MSI){
                setFreeShipping(true);
                setMsi(true);
            }
            else{
                setMsi(false);
                if(priceRange>=PRICE_SHIPPING)
                    setFreeShipping(true);
                else
                    setFreeShipping(false);
            } 
        }
        if(window?.location?.search && window.location.search.indexOf('productClusterIds')!=-1 && window.location.search.indexOf('169')!=-1)
            setDiscounts(true)
        else
            setDiscounts(false)
    },useSearch)

    const findIndexPrice=()=>{
        const search=window.location?.search;
        if(!search || search.indexOf('priceRange')==-1)
            return -1
        
        const params=search.split('&');
        const originalPriceRange=params.filter(item=>item.toLocaleLowerCase().indexOf('pricerange')!=-1);

        return params.indexOf(originalPriceRange[0]);
    }

    const findQuery=()=>{
        const search=window.location?.search;
        if(!search || search.indexOf('query')==-1)
            return -1
        
        const params=search.split('&');
        const info={
            params:params,
            places:{
                map:0,
                query:0,
            }
        }
        for(let i=0;i<params.length;i++){
            if(params[i].indexOf('map')==0)
                info.places['map']=i;
            if(params[i].indexOf('query')==0)
                info.places['query']=i;
        }


        //const originalPriceRange=params.filter(item=>item.toLocaleLowerCase().indexOf('pricerange')!=-1);

        return info;
    }

    const deleteFilter=(filter)=>{
        console.log('Delete Filters!! ',filter);
        const url=window.location;
        const indexPrice=findIndexPrice();
        const params=url.search.split('&');
        const filterParam = filter!='msi' ? '' : '&priceRange=' + PRICE_SHIPPING + '%20TO%2099999';
        let newUrl=url.pathname;
        params.map((item,index)=>{
            newUrl += index!=indexPrice ? item : filterParam
            newUrl += index+1==params.length || (index==indexPrice && filterParam=='') ? '' : '&'
            
        })
        console.log('New Url: ',newUrl);
        window.location.href=newUrl;
    }

    const deleteFilterDiscount=()=>{
        const url=window.location;
        const info=findQuery();

        let maps=info.params[info.places['map']].split(',');
        let queries=info.params[info.places['query']].split('/');

        maps.pop();
        queries.pop();

        info.params[info.places['map']]=maps.join(',');
        info.params[info.places['query']]=queries.join('/');

        info.params[info.places['map']].substring(0,info.params[info.places['map']].length-1);
        info.params[info.places['query']].substring(0,info.params[info.places['query']].length-1);



        let newUrl=url.pathname;
        info.params.map((item,index)=>{
            newUrl += index==info.params.length ? item : item+'&';           
        })
        console.log('New Url: ',newUrl);
        window.location.href=newUrl;
    }



    const setFilterDiscount=()=>{

        const url=window.location;
        let newUrl='';


        if(url.search.indexOf('_q'!=-1) && url.search.indexOf('searchState'==-1)){
            //Es una página de búsqueda sencilla

            const infoPage=useSearch.searchQuery.variables;
            
            newUrl=url.pathname+'?_q='+url.pathname.substring(1)+'&fuzzy=0&initialMap='+infoPage.map+'&initialQuery='+url.pathname.substring(1)+'&map='+maps[useSearch.map]+',productClusterIds&operator=and&query='+url.pathname.substring(1)+'/169&searchState';
            window.location.href=newUrl;
        }




        if(url.search=='' || url.search.indexOf('searchState')==-1)//Es una página de departamento/categoría
            newUrl=url.pathname+'?initialMap='+useSearch.map+'&map='+maps[useSearch.map]+',productClusterIds'+'&query='+url.pathname+'/169&searchState'
        else{//Es una página con filtros
            const info=findQuery();

            info.params[info.places['map']]=info.params[info.places['map']]+',productClusterIds'
            info.params[info.places['query']]=info.params[info.places['query']]+'/169'

            newUrl=url.pathname;
            info.params.map((item,index)=>{
                newUrl += index==info.params.length ? item : item+'&';           
            })
        }
        
        console.log('New url: ',newUrl)
        window.location.href=newUrl;

    }

    const setFilter=(filter)=>{

        // /169?initialMap=productClusterIds&initialQuery=169&map=productClusterIds&query=169&searchState

        console.log('setFilter',filter);
        const priceMin=filter=='freeShipping' ? PRICE_SHIPPING : PRICE_MSI;
        const url=window.location;
        
        
        let newUrl='';


        if(url.search.indexOf('_q'!=-1) && url.search.indexOf('searchState'==-1)){
            //Es una página de búsqueda sencilla

            const infoPage=useSearch.searchQuery.variables;
            newUrl=url.pathname+'?_q='+url.pathname.substring(1)+'&fuzzy=0&initialMap='+infoPage.map+'&initialQuery='+url.pathname.substring(1)+'&map='+maps[useSearch.map]+'&operator=and&priceRange='+priceMin+'%20TO%2099999'+'&query='+url.pathname.substring(1)+'&searchState';

            window.location.href=newUrl;
        }

        if(url.search=='' || url.search.indexOf('searchState')==-1)//Es una página de departamento/categoría
            newUrl=url.pathname+'?initialMap='+useSearch.map+'&initialQuery='+window.location.pathname.substring(1)+'&map='+maps[useSearch.map]+'&priceRange='+priceMin+'%20TO%2099999'+'&searchState';
        else{//Es una página con filtros
            const indexPrice=findIndexPrice();

            if(indexPrice==-1)
                newUrl=url.pathname+url.search+'&priceRange='+priceMin+'%20TO%2099999';
            else{
                const params=url.search.split('&');
                newUrl=url.pathname;
                params.map((item,index)=>{
                    newUrl += index!=indexPrice ? item : 'priceRange='+priceMin+'%20TO%2099999'
                    newUrl += index+1==params.length ? '' : '&'              
                })
            }
        }
        
        console.log('New url: ',newUrl)
        window.location.href=newUrl;
    }

    const handleCheckbox = e => {
        const name=e.target.name;
        if(e.target.checked){
            if(e.target.name=='discounts')
                setFilterDiscount()
            else
                setFilter(name);
        }
        else{
            if(e.target.name=='discounts')
                deleteFilterDiscount();
            else
                deleteFilter(name);
        }

        if(name=='freeShipping')
            setFreeShipping(!freeShipping);
        if(name=='msi')
            setMsi(!msi);
        if(name=='discounts')
            setDiscounts(!discounts);

    };

    return <>
        <div className={styles.filtersCustomWrapper}>
            <div className={ freeShipping ? styles.active:''}>
                <Toggle
                    name={'freeShipping'}
                    label={freeShipping ? "Envío gratis" : "Envío gratis"}
                    checked={freeShipping}
                    onChange={handleCheckbox}
                />
            </div>
            <div className={msi ? 'active':''}>
                <Toggle
                    name={'msi'}
                    label={msi ? "Meses sin intereses" : "Meses sin intereses"}
                    checked={msi}
                    onChange={handleCheckbox}
                />
            </div>
            <div className={discounts ? 'active':''}>
                <Toggle
                    name={'discounts'}
                    label={discounts ? "Descuentos" : "Descuentos"}
                    checked={discounts}
                    onChange={handleCheckbox}
                />
            </div>
        </div>
    </>
}

export default Filters
