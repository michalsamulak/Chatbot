const createElementWithClass = (elementType: string, classesName: string) => {
    const element = document.createElement(elementType)
    element.classList.add(classesName)
    return element
}

const createElementWithManyClass = (elementType: string, classesName: string[]) => {
    const element = document.createElement(elementType)
    classesName.forEach(classe => {
        element.classList.add(classe)
    })
    return element
}

const addElemntsToContainer = <T>(container: any, elements: T[]) => {
    elements.forEach(element => {
        container.appendChild(element)
    })
}

const setAttr = (element: HTMLElement, attributes: Record<string, any>, setContent?: string) => {
    Object.keys(attributes).forEach(attribut => {
      element.setAttribute(attribut, attributes[attribut])
    })
    if(setContent) element.innerHTML = setContent
  } 


export { createElementWithClass, createElementWithManyClass, addElemntsToContainer, setAttr }