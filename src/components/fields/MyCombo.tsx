import {  useState } from 'react'
import { Combobox } from '@headlessui/react'
import findCountries, { Country } from "../../country-service"
import { useQuery } from '@tanstack/react-query'

export default function MyCombobox() {
  const [selectedPerson, setSelectedPerson] = useState("Saudi Arabia")
  const [query, setQuery] = useState('')

  const { data, isLoading, isError } = useQuery<Country[], Error>(
    "countries",
    () => findCountries(query),

  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  console.log("first: ", isLoading)
 
  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        { data && (data as Country[]).map((country:Country) => (
          <Combobox.Option key={country.code} value={country.name}>
            {country.name}
          </Combobox.Option>
        ))
        }
      </Combobox.Options>
    </Combobox>
  )
}