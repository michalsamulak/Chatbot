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

const loaderAnimation = () => {
    
   const loader = createElementWithClass('div', 'loader')
   const spanElA = document.createElement('span')
   const spanElB = document.createElement('span')
   const spanElC = document.createElement('span')
   addElemntsToContainer(loader, [spanElA,spanElB,spanElC])
   return loader
}

const removeLoader = (container: HTMLElement, elementToAdd: HTMLElement, message: string, time: number) => {
    setTimeout(()=> {
        container.removeChild(elementToAdd)
        container.innerHTML = message
      }, time)
}

export { createElementWithClass, createElementWithManyClass, addElemntsToContainer, setAttr, loaderAnimation, removeLoader }