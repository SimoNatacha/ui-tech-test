import InputField from '../../components/fields/InputField';
import ButtonField from '../../components/fields/SubmitField';
import Label from '../../components/fields/Label';
import useFields, { Submit, Input, AddFn, RemoveFn } from '../../components/fields/useFields';
import FieldWrapper from '../../components/fields/FieldWrapper';
import { Form } from 'react-router-dom';
{/** import { useMode } from '../../components/ModeSwitch'; */ }
import ModeSwitch from '../../components/ModeSwitch/ModeSwitch';
import Aside from '../../components/Aside';
import MyCombobox from '../../components/fields/MyCombo';
import AsideField from '../../components/fields/AsideField';

export default function Designer() {
    const { fields, _, addField, removeField, moveField } = useFields();

    {/**const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
        if (active.id !== over.id) {
          const fromIndex = fields.findIndex((field) => field.id === active.id);
          const toIndex = fields.findIndex((field) => field.id === over.id);
          moveField(fromIndex, toIndex);
        }
      };*/}

    {/**  const [mode] = useMode() */ }
    const mode = "edit"
    return (
        <div className='h-screen w-screen flex items-stretch'>
            <main className='max-w-xl mx-auto mt-10 grow'>
                <div className='flex justify-between'>
                    <h1 className='text-xl'>Mini form builder</h1>
                    <ModeSwitch />
                </div>
                <MyCombobox />
                <Form
                    method='POST'
                    action="/response"
                    className='mt-10'
                >
                    {/** Render the fields based on their type */}
                    {fields.map((f) => {
                        switch (f.type) {
                            case "date":
                            case "number":
                            case "text":
                                return (
                                    <FieldWrapper id={f.id} key={f.id} >
                                        <Label defaultValue={f.label} />
                                        <InputField {...f as Input} />
                                    </FieldWrapper>
                                );
                            case "submit":
                                return (
                                    <FieldWrapper id={f.id} key={f.id} className="mt-4" {...removeField as RemoveFn} >
                                        <ButtonField {...f as Submit} {...addField as AddFn} />
                                    </FieldWrapper>);
                        }
                    })}
                    {/** Add a new field */}
                    {mode == "edit" && (
                        <fieldset
                            className='mt-4 rounded p-1 ml-12'
                        >
                            <legend className='text-sm text-gray-400 uppercase font-medium'>Add Field</legend>
                            <div className='mt-1 grid grid-cols-3 gap-1'>
                                <button
                                    type='button'
                                    className='block px-2 py-1 border border-gray-300 hover:bg-gray-50 rounded'
                                >
                                    Submit Button
                                </button>
                                <button
                                    type='button'
                                    className='block px-2 py-1 border border-gray-300 hover:bg-gray-50 rounded'
                                >
                                    Text Field
                                </button>
                                <button
                                    type='button'
                                    className='block px-2 py-1 border border-gray-300 hover:bg-gray-50 rounded'
                                >
                                    Date Field
                                </button>
                                <button
                                    type='button'
                                    className='block px-2 py-1 border border-gray-300 hover:bg-gray-50 rounded'
                                >
                                    Number Field
                                </button>
                            </div>
                        </fieldset>
                    )}
                </Form>
            </main>
            <Aside/>
        </div >
    );
}


