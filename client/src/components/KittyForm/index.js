import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_KITTIES } from '../../utils/mutations';

const KittyForm = () => {

    const [ kittyInfo, setKittyInfo ] = useState({
        name: '',
        breed: '',
        age: 0,
        gender: '', 
        color: '', 
        declawed: Boolean(false)
    });

    const [mutateKitties, { error }] = useMutation(ADD_KITTIES);

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        console.log("Did the state update?", kittyInfo)
        setKittyInfo({...kittyInfo, [name]: value});
    }

    const handleNumberChange = async (e) => {
        const { name , value } = e.target;
        setKittyInfo(
            {
                ...kittyInfo,
                [name]: parseInt(value)
            }
        )
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await mutateKitties({
                variables: {
                    ...kittyInfo
                }
            })
            window.location.reload();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="container">
            <div className="row bg-orange-200">
            <form onSubmit={handleFormSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Akira" 
                    name="name"
                    value={kittyInfo.name}
                    onChange={handleInputChange}
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Breed</label>
                    <input type="text" id="breed" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Calico" 
                    name="breed"
                    value={kittyInfo.breed}
                    onChange={handleInputChange}
                    required />
                </div>  
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                    <input type="number" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3" 
                    name="age"
                    value={kittyInfo.age}
                    onChange={handleNumberChange}
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <input type="text" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="M or F" 
                    name="gender"
                    value={kittyInfo.gender}
                    onChange={handleInputChange}
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color of Kitty</label>
                    <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="orange" 
                    name="color"
                    value={kittyInfo.color}
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="mb-6">
                    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Declawed</label>
                    <input type="checkbox" id="declawed" className="my-3 mx-5" 
                    name="declawed"
                    value={kittyInfo.declawed}
                    onChange={handleInputChange}
                    />
                </div> 
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
            </form>
        </div>
    </section>
    );
};


export default KittyForm;