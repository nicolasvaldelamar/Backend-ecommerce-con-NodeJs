const faker = require('faker');

class usersService {
    constructor() {
      this.users = []
      this.generate();

    }

    generate(){
      for (let i = 0 ; i < 100; i++){
        this.users.push({
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          image: faker.image.imageUrl()
        })
      }
    }

    find(){
      return this.users
    }

    findOne(id){
      return this.users.find(user => user.id === id)
    }

    create(data){
      this.users.push({
        id: faker.datatype.uuid(),
        ...data
      })
      data = {
        id: faker.datatype.uuid(),
        ...data
      }
      return {
        description: "Usuario creado",
        data: data
      }
    }


    update(id, changes){
      const index = this.users.findIndex(user => user.id === id)
      const user = this.users.find(user => user.id === id)
      if(index === -1){
        throw new Error('User not found')
      }
      this.users[index] = {
          ...user,
          ...changes
      }
      return {
        description: "Usuario actualizado",
        data: this.users[index]
      }

    }

    delete(id){
      const newUsers = this.users.filter(user => user.id !== id)
      this.users = newUsers;
      return this.users
    }


}

module.exports = usersService;
