import { Container } from "./styles"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { CharacterContext } from "../../contexts/character"


export function Form() {

    const {getCharacter} = useContext(CharacterContext)

    const schema = z.object({
        name: z.string(),
        specie: z.string(),
        gender: z.string(),
    })

    type SearchFormInputs = z.infer<typeof schema>

    const {handleSubmit, register} = useForm<SearchFormInputs>({
        resolver: zodResolver(schema)
    })

    function submitForm(data: SearchFormInputs){
        const {name, gender, specie} = data;
        getCharacter(name, specie, gender)
    }



    return (
       <Container>
         <form onSubmit={handleSubmit(submitForm)}>
            <input type="text" placeholder="Filter by name..." {...register('name')}  required/>
            <input type="text" placeholder="Species" {...register('specie')}  required/>
            <select {...register('gender')} defaultValue={'DEFAULT'} >
                <option value="DEFAULT" disabled>Gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="genderless">genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <button type="submit">search</button>

        </form>
       </Container>

    )
}