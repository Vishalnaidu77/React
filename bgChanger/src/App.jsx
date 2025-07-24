import { useState } from 'react';
import Button from './Components/button';

function App() {
    const [color, setColor] = useState("#fff");



    return (
        <div className='w-full h-screen duration-500'
            style={{ backgroundColor: color }}
        >
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-gray-100 px-3 py-2 rounded-xl'>
                    <Button colorName='Red' setColor={setColor} />
                    <Button colorName='Green' setColor={setColor} />
                    <Button colorName='Blue' setColor={setColor} />
                    <Button colorName='Purple' setColor={setColor} />
                </div>
            </div>
        </div>
    );
}

export default App;
