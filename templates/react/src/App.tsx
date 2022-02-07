{% if sample %}
import { Header } from 'citric'
{% endif %}

const App = () => {
  return (
    <>
      {% if sample %}
      <Header
        name="Jane Doe"
        user="jane.doe"
        notification={24}
        email="janedoe@citric.design"
        actionLogout={() => console.log('logout')}
        actionNotification={() => console.log('notification')}
      />
      {% endif %}
    </>
  )
}

export default App
