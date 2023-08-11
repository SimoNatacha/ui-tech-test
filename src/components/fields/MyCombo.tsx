import {  useState } from 'react'
import { Combobox } from '@headlessui/react'
import findCountries, { Country } from "../../country-service"
import { useQuery } from '@tanstack/react-query'

export default function MyCombobox() {
  const [selectedPerson, setSelectedPerson] = useState("")
  const [query, setQuery] = useState('')

  const { data, isLoading, isError } = useQuery<Country[], Error>(
    "countries",
    () => findCountries(query),

  );

 
  return (
    <div>
      <div>Select Country:</div>
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        { isLoading? <div>Loading...</div>:
        isError? <div>Error fetching data</div>:
        !data? <div>No data available</div>:
        
        
        data && (data as Country[]).map((country:Country) => (
          <Combobox.Option key={country.code} value={country.name}>
            {country.name.common}
          </Combobox.Option>
        ))
        }
      </Combobox.Options>
    </Combobox>

    </div>

  )
}