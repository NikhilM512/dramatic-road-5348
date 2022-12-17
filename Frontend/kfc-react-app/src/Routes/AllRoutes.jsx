
export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/offer" element={<Deals/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    )
}