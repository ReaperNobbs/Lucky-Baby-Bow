let bows_for_sale = []

function Add_Bow(Bow_Name, Bow_Image, Bow_Tags, Bow_Price, Bow_Description) {
      bows_for_sale.push({
            Name: Bow_Name,
            Image: Bow_Image,
            Tags: Bow_Tags,
            Price: Bow_Price,
            Description: Bow_Description,
      })
      Load_Interface()
}

function Create_Template(bow_object) {
      let ShopGrid = document.getElementById('shop-grid')

      let shop_template = document.createElement('div')
      shop_template.className = 'shop-template'

      let shop_template_title = document.createElement('a')
      shop_template_title.href = '#'
      shop_template_title.innerHTML = bow_object.Name
      shop_template_title.className = 'shop-template-title'
      shop_template.appendChild(shop_template_title)

      let shop_template_image_container = document.createElement('a')
      shop_template_image_container.href = '#'
      shop_template_image_container.innerHTML = ''
      shop_template_image_container.className = 'shop-template-image-container'
      shop_template.appendChild(shop_template_image_container)

      let shop_template_image = document.createElement('img')
      shop_template_image.src = bow_object.Image
      shop_template_image.className = 'shop-template-image'
      shop_template_image_container.appendChild(shop_template_image)
      
      let shop_template_informations = document.createElement('div')
      shop_template_informations.className = 'shop-template-informations'
      shop_template.appendChild(shop_template_informations)

      let shop_template_tags = document.createElement('p')
      shop_template_tags.className = 'shop-template-tags'
      shop_template_tags.innerHTML = bow_object.Tags
      shop_template_informations.appendChild(shop_template_tags)

      let shop_template_price = document.createElement('p')
      shop_template_price.className = 'shop-template-price'
      shop_template_price.innerHTML = bow_object.Price.toString() + "€"
      shop_template_informations.appendChild(shop_template_price)

      let shop_template_description = document.createElement('p')
      shop_template_description.className = 'shop-template-description'
      shop_template_description.innerHTML = "Descrição Visual: " + bow_object.Description
      shop_template_informations.appendChild(shop_template_description)

      let comprar = document.createElement('a')
      comprar.href = '#'
      comprar.className = 'comprar'
      comprar.innerHTML = "Comprar"
      shop_template.appendChild(comprar)

      ShopGrid.appendChild(shop_template)
}

function Load_Interface() {
      let ShopGrid = document.getElementById('shop-grid')
      ShopGrid.innerHTML = ''

      bows_for_sale.forEach(function (bow_object) {
           Create_Template(bow_object) 
      })
}

Add_Bow('test', "/Resources/Laco.jpg", "Personalizável Elástico e Gancho", "8.50", "")
Add_Bow('test', "/Resources/Laco.jpg", "Personalizável Elástico e Gancho", "8.50", "")
Add_Bow('test', "/Resources/Laco.jpg", "Personalizável Elástico e Gancho", "8.50", "")
Add_Bow('test', "/Resources/Laco.jpg", "Personalizável Elástico e Gancho", "8.50", "")
Add_Bow('test', "/Resources/Laco.jpg", "Personalizável Elástico e Gancho", "8.50", "")
Add_Bow('Laço Vermelho', "/Resources/Laco.jpg", "Personalizável Elástico e Gancho", "7.00", "Laço com fitas rosas escuras e brancas com logótipo no meio.")