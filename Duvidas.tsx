export function Duvidas() {
    return (
        <div className="p-8">
            <div className="sm:items-start sm:gap-4 sm:pt-5">

                <div className=""> 
                    <label className="text-base sm:mt-px sm:pt-2 my-3">
                        {' '}
                        1. Identificação do aluno{' '}
                    </label>
                </div>                

                <div className="">
                    <div className="grid place-content-center grid-cols-4 justify-between items-center gap-4 pt-5">
                        <div className="col-span-2 flex items-center">
                            <label className="mr-4">
                                Nome:
                            </label>
                            <input
                                type="name-student"
                                name="name-student"
                                value={null}
                                handleOnChange={null}
                                autoComplete="given-name"
                                className="w-80 flex-1 rounded-md shadow-sm"
                            />
                        </div>

                        <div className="col-span-2 flex items-center">
                            <label className="mr-4">
                                Data de Nascimento:
                            </label>
                            <input
                                type="text"
                                name="DateOfBirth"
                                value={null}
                                handleOnChange={null}
                                className="w-80 flex-1 rounded-md shadow-sm"
                            />
                        </div>      
                    </div>                    
                </div>

                <div className="">
                    <div className=" grid  grid-cols-4  place-content-center justify-between items-center gap-4 pt-5">
                        <div className="  col-span-3 flex items-center">
                            <label className="mr-4">
                                Ano:
                            </label>
                            <input
                                type="name-student"
                                name="name-student"
                                value={null}
                                handleOnChange={null}
                                autoComplete="given-name"
                                className="w-80 flex-1 rounded-md shadow-sm"
                            />
                        </div>

                        <div className=" col-span-2 flex items-center">
                            <label className="mr-4">
                                Turma
                            </label>
                            <input
                                type="text"
                                name="DateOfBirth"
                                value={null}
                                handleOnChange={null}
                                className="w-80 flex-1 rounded-md shadow-sm"
                            />
                        </div>                           

                        <div className="col-span-3 flex items-center">
                            <label className="mr-4">
                                Turno:
                            </label>
                            <input
                                type="text"
                                name="DateOfBirth"
                                value={null}
                                handleOnChange={null}
                                className="w-80 flex-1 rounded-md shadow-sm"
                            />
                        </div>    
                    </div>                    
                </div>
                
                
                <div className="">                           
                    <div className="grid place-content-center grid-cols-4 justify-between items-center gap-4 pt-5">
                        <div className="col-span-2 flex items-center">
                            <label className="mr-4">
                                Pai:
                            </label>
                            <input
                                type="text"
                                name="Fathers-name"
                                value={null}
                                handleOnChange={null}
                                className="w-80 flex-1 rounded-md shadow-sm"
                            />
                        </div>

                        <div className="col-span-2 flex items-center">
                            <label className="mr-4">
                                Mãe:
                            </label>
                            <input
                                type="text"
                                name="Mothers-name"
                                value={null}
                                handleOnChange={null}
                                className="w-80 flex-1 rounded-md shadow-sm"
                            />
                        </div>      
                    </div>
                </div>              
            </div>  
        </div>
    )
}