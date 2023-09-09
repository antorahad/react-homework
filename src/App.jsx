import './App.css'
// My components
import Testprops from './components/Testprops'
import Desprops from './components/Desprops'
import Conditional from './components/Conditional'
import Dynamic from './components/Dynamic'
import Eventhandle from './components/Eventhandle'
import Usestate from './components/Usestate'
import Usereffect from './components/Useeffect'

function App() {
      const persons = [
          {name : 'Latif Ahamed', age : 35,  job : 'Teacher', sallary : 25000},
          {name : 'Tamim Hasan', age : 45,  job : 'Doctor', sallary : 75000},
          {name : 'Sufia Kamal', age : 30,  job : 'Painter', sallary : 20000},
          {name : 'Jafor Iqbal', age : 25,  job : 'Writer', sallary : 15000}
      ];


      const products = [
          {name: 'Hp Laptop', price: 700000},
          {name: 'iphone 13 pro max', price: 950000},
          {name: 'Rolex watch', price: 100000}
      ]
  return (
    <>
      <h4>Props Test</h4>
      <section className='test-container'>
          <Testprops name={'Nur Ahad'} age={26} gender={'male'}></Testprops>
          <Testprops name={'Kazi Fahim'} age={27} gender={'male'}></Testprops>
      </section>
      <h4>Destructure Props Test</h4>
      <section className='test-container'>
          <Desprops name={'Fatima Khanom'} age={24} gender={'female'}></Desprops>
          <Desprops name={'Nafisa Fatema'} age={20} gender={'female'}></Desprops>
      </section>
      <h4>Conditional Rendering Test</h4>
      <section className='test-container'>
          <Conditional task={'Coding React'} isTrue={true}></Conditional>
          <Conditional task={'Having Dinner'} isTrue={false}></Conditional>
          <Conditional task={'Had Snacks'} isTrue={true}></Conditional>
          <Conditional task={'Drinking Coffee'} isTrue={false}></Conditional>
          <Conditional task={'Going to bed'} isTrue={false}></Conditional>
      </section>
      <h4>Dynamic Rendering Test</h4>
      <section className='test-container'>
          {
            persons.map(person => <Dynamic person={person}></Dynamic>)
          }
      </section>
      <h4>Event Handle Test</h4>
      <section className='test-container'>
          <Eventhandle></Eventhandle>
      </section>
      <h4>useState Test</h4>
      <section className='test-container'>
        {
          products.map(product => <Usestate product={product}></Usestate>)
        }
      </section>
      <h4>useEffect Test</h4>
      <section className='test-container'>
          <Usereffect></Usereffect>
      </section>
    </>
  )
}

export default App
