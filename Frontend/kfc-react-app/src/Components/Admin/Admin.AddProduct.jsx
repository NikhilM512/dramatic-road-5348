import {
    Box, Flex, Select
} from "@chakra-ui/react"
import style from './Admin.module.css'
import axios from 'axios';
import { useRef } from "react";

const postProduct = async (data, next) => {
    try {
        await axios.post('https://creepy-fawn-purse.cyclic.app/api/product', data)
        alert('product addded successfully')
        next();
    } catch (err) {
        alert(err);
    }
}


export const AddProduct = () => {
    const inpName = useRef(null);
    const inpDesc = useRef(null);
    const inpPrice = useRef(null);
    const inpDiscount = useRef(null);
    const inpimage1 = useRef(null);
    const inpimage2 = useRef(null);
    const inpCat = useRef(null);
    const inpSub = useRef(null);

    // const [disablity, setDis] = useState(false);

    // image:String,
    // title:String,
    // desc:String,
    // categories:String,
    // price:String,
    // serve:String,
    // type:String

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inpimage2.current.value===""){
            inpimage2.current.value=1
        }
        let obj = {
            image: inpimage1.current.value,
            title: inpName.current.value,
            desc: inpDesc.current.value,
            categories:inpCat.current.value,
            price: inpPrice.current.value,
            serve: inpimage2.current.value,
            type: inpSub.current.value,
        }
        console.log(obj);
        postProduct(obj, ()=>{e.target.reset()});
    }
    return <Box>

        <form className={style.form} onSubmit={handleSubmit}>
            <Flex className={style.sectionA} >
                <Box className={style.sectionA1}>
                    <input type="text" ref={inpName} required placeholder='Enter Name of the product' />
                    <input type="text" ref={inpDesc} required placeholder="Enter Description" />
                    <Flex justify='space-between'>
                        <Select placeholder='Select Category' w='45%' required ref={inpCat}>
                            <option value='BEVERAGES'>BEVERAGES</option>
                            <option value='Biryani_Buckets'>Biryani_Buckets</option>
                            <option value='BOX_MEALS'>BOX_MEALS</option>
                            <option value='BURGERS'>BURGERS</option>
                            <option value='CHICKEN'>CHICKEN</option>
                            <option value='NEWLUNCH'>NEWLUNCH</option>
                            <option value='SNACKS'>SNACKS</option>
                            <option value='STAY_HOME'>STAY_HOME</option>
                        </Select>
                        <Select placeholder='Select SubCategory' w='45%' required ref={inpSub}>
                            <option value='Non veg'>Non Veg</option>
                            <option value='Veg'>Veg</option>
                        </Select>
                    </Flex>
                    <Flex className={style.sectionAA1} alignItems="center">
                        <label><input type="text" ref={inpPrice} required placeholder="Enter price" /> INR</label>
                        <label><input type="text" ref={inpDiscount} required placeholder="Enter Discount" /> %</label>
                    </Flex>
                    <input type="text" placeholder='Enter image URL' required ref={inpimage1} />
                    <input type="text" placeholder='Enter serve' ref={inpimage2} />
                </Box>     
            </Flex>
            <button type='submit' className={style.subButton}>Add Product</button>
        </form>

    </Box>
}