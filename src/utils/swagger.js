export const swaggerOptions = {
  definition: 
    {
      "openapi": "3.0.0",
      "info": {
        "title": "SEGUNDO SPRINT",
        "description": "Aplicación para que las personas se registren, inicien sesión y pidan los productos que deseen del restaurante",
        "version": "1.0.0"
      },
      "servers": [
        {
          "url": "http://localhost:5000",
          "description": "Servidor local"
        }
      ],
      "tags": [
        {
          "name": "Usuarios",
          "description": "Todos los usuarios del sistema"
        },
        {
          "name": "Productos",
          "description": "Todos los productos del sistema"
        },
        {
          "name": "Pedidos",
          "description": "Todos los pedidos de los usuarios"
        },
        {
          "name": "MediosDePago",
          "description": "Todos los medios de pago del sistema"
        }
      ],
      "paths": {
        "/usuarios": {
          "get": {
            "tags": [
              "Usuarios"
            ],
            "summary": "Todos los usuarios del sistema",
            "description": "Todos los usuarios registrados en el sistema",
            "responses": {
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Usuario"
                    }
                  }
                }
              }
            }
          }
        },
        "/usuarios/nuevos": {
          "post": {
            "tags": [
              "Usuarios"
            ],
            "summary": "Para crear nuevos usuarios en el sistema",
            "description": "Crear usuarios",
            "security": [],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Usuario"
                  }
                }
              }
            },
            "responses": {
              "201": {
                "description": "Created",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "400": {
                "description": "Bad Request",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "204": {
                "description": "No Content",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "/usuarios/Login": {
          "post": {
            "tags": [
              "Usuarios"
            ],
            "summary": "Para que los usuarios inicien sesión",
            "description": "Iniciar sesión",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UsuarioLogin"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "400": {
                "description": "Bad Request",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "204": {
                "description": "No Content",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "/productos": {
          "get": {
            "tags": [
              "Productos"
            ],
            "summary": "Ver todos los productos del sistema",
            "description": "Ver los productos registrados en el sistema",
            "responses": {
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Producto"
                    }
                  }
                }
              }
            }
          }
        },
        "/productos/nuevos": {
          "post": {
            "tags": [
              "Productos"
            ],
            "summary": "Para que los administradores creen productos en el sistema",
            "description": "Crear nuevos productos",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Producto"
                  }
                }
              }
            },
            "responses": {
              "201": {
                "description": "Created",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "400": {
                "description": "Bad Request",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "204": {
                "description": "No Content",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "401": {
                "description": "Unauthorized",
              }
            }
          }
        },
        "/productos/{id}": {
          "put": {
            "tags": [
              "Productos"
            ],
            "summary": "Para que los administradores editen productos en el sistema",
            "description": "Para editar propiedades de los productos existentes",
            "parameters": [
              {
                "in": "path",
                "name": "id",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "600b365c79bdd616403fc73a"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Producto"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "204": {
                "description": "No Content",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "401": {
                "description": "Unauthorized",
              }
            }
          }
        },
        "/productos/Eliminar/{id}": {
          "delete": {
            "tags": [
              "Productos"
            ],
            "summary": "Para que los administradores eliminen productos del sistema",
            "description": "Para eliminar alguno de los productos existentes",
            "parameters": [
              {
                "in": "path",
                "name": "id",
                "description": "Identificador del producto",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "600b365c79bdd616403fc73b"
                }
              }
            ],
            "responses": {
              "400": {
                "description": "Bad Request",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "401": {
                "description": "Unauthorized",
              }
            }
<<<<<<< HEAD
          }
        },
        "/pedidos": {
          "get": {
            "tags": [
              "Pedidos"
            ],
            "summary": "Para que los administradores y usuarios vean todos los pedidos realizados",
            "description": "Los administradores y usuarios podrán ver todos los pedidos registrados en el sistema",
            "responses": {
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Pedido"
=======
          },
          "/pedidos": {
            "get": {
              "tags": [
                "Pedidos"
              ],
              "summary": "Para que los administradores y usuarios vean todos los pedidos realizados",
              "description": "Los administradores y usuarios podrán ver todos los pedidos registrados en el sistema",
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Pedido"
                      }
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                    }
                  }
                }
              },
              "204": {
                "description": "No Content",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "401": {
                "description": "Unauthorized",
              }
            }
<<<<<<< HEAD
          }
        },
        "/pedidos/Crear": {
          "post": {
            "tags": [
              "Pedidos"
            ],
            "summary": "Para empezar a llenar el esquema de pedidos",
            "description": "Para empezar a llenar datos",
            "responses": {
              "201": {
                "description": "Created",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
=======
          },
          "/pedidos/Crear": {
            "post": {
              "tags": [
                "Pedidos"
              ],
              "summary": "Para empezar a llenar el esquema de pedidos",
              "description": "Para empezar a llenar datos",
              "responses": {
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                        }
                      }
                    }
                  }
<<<<<<< HEAD
                }
              },
              "401": {
                "description": "Unauthorized",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
=======
                },
                "401": {
                  "description": "Unauthorized",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                        }
                      }
                    }
                  }
                }
              }
            }
<<<<<<< HEAD
          }
        },
        "/pedidos/Ordenar/{id}": {
          "post": {
            "tags": [
              "Pedidos"
            ],
            "summary": "Para que los usuarios terminen de crear sus pedidos en el sistema",
            "description": "Para terminar de crear el pedido",
            "parameters": [
              {
                "in": "path",
                "name": "id",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "600b365c79bdd616403fc73a"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Pedido"
=======
          },
          "/pedidos/Ordenar/{id}": {
            "post": {
              "tags": [
                "Pedidos"
              ],
              "summary": "Para que los usuarios terminen de crear sus pedidos en el sistema",
              "description": "Para terminar de crear el pedido",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                  }
                }
              }
            },
            "responses": {
              "201": {
                "description": "Created",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
<<<<<<< HEAD
                }
              },
              "204": {
                "description": "No content",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
=======
                },
                "204": {
                  "description": "No content",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                        }
                      }
                    }
                  }
                }
              }
            }
<<<<<<< HEAD
          }
        },
        "/pedidos/Editar/{id}": {
          "put": {
            "tags": [
              "Pedidos"
            ],
            "summary": "Para que los usuarios editen pedidos mientras no los hayan confirmado",
            "description": "Para editar propiedades de los pedidos existentes",
            "parameters": [
              {
                "in": "path",
                "name": "id",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "600b365c79bdd616403fc73a"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Pedido"
=======
          },
          "/pedidos/Editar/{id}": {
            "put": {
              "tags": [
                "Pedidos"
              ],
              "summary": "Para que los usuarios editen pedidos mientras no los hayan confirmado",
              "description": "Para editar propiedades de los pedidos existentes",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "204": {
                "description": "No Content",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "400": {
                "description": "Bad Request",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "/pedidos/estadoPedido/{id}": {
          "put": {
            "tags": [
              "Pedidos"
            ],
            "summary": "Para que los administradores cambien estados de los pedidos",
            "description": "Para cambiar los estados de los pedidos",
            "parameters": [
              {
                "in": "path",
                "name": "id",
                "required": true,
                "schema": {
                  "type": "number",
                  "example": 1
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Estado"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "401": {
                "description": "Unauthorized",
              }
            }
<<<<<<< HEAD
          }
        },
        "/pedidos/Eliminar/{id}": {
          "delete": {
            "tags": [
              "Pedidos"
            ],
            "summary": "Para que los administradores eliminen pedidos del sistema",
            "description": "Para eliminar alguno de los pedidos existentes",
            "parameters": [
              {
                "in": "path",
                "name": "id",
                "description": "Identificador del producto",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "600b365c79bdd616403fc73b"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
=======
          },
          "/pedidos/Eliminar/{id}": {
            "delete": {
              "tags": [
                "Pedidos"
              ],
              "summary": "Para que los administradores eliminen pedidos del sistema",
              "description": "Para eliminar alguno de los pedidos existentes",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "description": "Identificador del producto",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73b"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/mediosdepago": {
            "get": {
              "tags": [
                "MediosDePago"
              ],
              "summary": "Para que los administradores vean todos los medios de pago del sistema",
              "description": "Para que los administradores vean los medios de pago registrados en el sistema",
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/MedioDePago"
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                      }
                    }
                  }
                }
              }
<<<<<<< HEAD
            }
          }
        },
        "/mediosdepago": {
          "get": {
            "tags": [
              "MediosDePago"
            ],
            "summary": "Para que los administradores vean todos los medios de pago del sistema",
            "description": "Para que los administradores vean los medios de pago registrados en el sistema",
            "responses": {
              "200": {
                "description": "Ok",
=======
            },
          "/mediosdepago/nuevos": {
            "post": {
              "tags": [
                "MediosDePago"
              ],
              "summary": "Para que los administradores creen medios de pago en el sistema",
              "description": "Crear nuevos medios de pago",
              "requestBody": {
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/MedioDePago"
                    }
                  }
                }
              },
<<<<<<< HEAD
              "401": {
                "description": "Unauthorized",
              }
            }
          },
        "/mediosdepago/nuevos": {
          "post": {
            "tags": [
              "MediosDePago"
            ],
            "summary": "Para que los administradores creen medios de pago en el sistema",
            "description": "Crear nuevos medios de pago",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MedioDePago"
=======
              "responses": {
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "204": {
                  "description": "No Content",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                }
              }
            }
          },
          "/mediosdepago/{id}": {
            "put": {
              "tags": [
                "MediosDePago"
              ],
              "summary": "Para que los administradores editen los medios de pago que hay en el sistema",
              "description": "Para editar propiedades de los medios de pago existentes",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73b"
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                  }
                }
              }
            },
            "responses": {
              "400": {
                "description": "Bad Request",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "201": {
                "description": "Created",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
<<<<<<< HEAD
                }
              },
              "204": {
                "description": "No Content",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
                        }
                      }
                    }
                  }
=======
                },
                "401": {
                  "description": "Unauthorized",
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                }
              },
              "401": {
                "description": "Unauthorized",
              }
            }
<<<<<<< HEAD
          }
        },
        "/mediosdepago/{id}": {
          "put": {
            "tags": [
              "MediosDePago"
            ],
            "summary": "Para que los administradores editen los medios de pago que hay en el sistema",
            "description": "Para editar propiedades de los medios de pago existentes",
            "parameters": [
              {
                "in": "path",
                "name": "id",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "600b365c79bdd616403fc73b"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MedioDePago"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                        }
                      }
                    }
                  }
                }
              },
              "204": {
                "description": "No content",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "err": {
                          "type": "string",
=======
          },
          "/mediosdepago/Eliminar/{id}": {
            "delete": {
              "tags": [
                "MediosDePago"
              ],
              "summary": "Para que los administradores eliminen medios de pago del sistema",
              "description": "Para eliminar alguno de los medios de pago existentes",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "description": "Identificador del medio de pago a eliminar",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73b"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                            "example": "Producto eliminado correctamente"
                          }
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
                        }
                      }
                    }
                  }
                }
              },
              "401": {
                "description": "Unauthorized",
              }
            }
          }
        },
        "/mediosdepago/Eliminar/{id}": {
          "delete": {
            "tags": [
              "MediosDePago"
            ],
            "summary": "Para que los administradores eliminen medios de pago del sistema",
            "description": "Para eliminar alguno de los medios de pago existentes",
            "parameters": [
              {
                "in": "path",
                "name": "id",
                "description": "Identificador del medio de pago a eliminar",
                "required": true,
                "schema": {
                  "type": "string",
                  "example": "600b365c79bdd616403fc73b"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Ok",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "msg": {
                          "type": "string",
                          "example": "Producto eliminado correctamente"
                        }
                      }
                    }
                  }
                }
              },
              "401": {
                "description": "Unauthorized",
              }
            }
          }
        }
      },
      "security": [
        {
          "bearerAuth": []
        }
      ],
      "components": {
        "securitySchemes": {
          "bearerAuth": {
            "type": "http",
            "scheme": "bearer"
          }
        },
        "schemas": {
          "Usuario": {
            "type": "object",
            "required": [
              "nombre",
              "apellido",
              "correo",
              "telefono",
              "direccion",
              "contraseña",
              "administrador"
            ],
            "properties": {
              "nombre": {
                "type": "string",
                "example": "Jaao"
              },
              "apellido": {
                "type": "string",
                "example": "A"
              },
              "correo": {
                "type": "string",
                "example": "j@gmail.com"
              },
              "telefono": {
                "type": "number",
                "example": 311111
              },
              "direccion": {
                "type": "string",
                "example": "Hospital"
              },
              "contraseña": {
                "type": "string",
                "example": "111111"
              },
              "administrador": {
                "type": "boolean",
                "example": "false"
              }
<<<<<<< HEAD
            }
          },
          "UsuarioLogin": {
            "type": "object",
            "required": [
              "correo",
              "contraseña"
            ],
            "properties": {
              "correo": {
                "type": "string",
                "example": "j.j@gmail.com"
              },
              "contraseña": {
                "type": "string",
                "example": "111111"
              }
            }
          },
          "Producto": {
            "type": "object",
            "required": [
              "nombre",
              "precio"
            ],
            "properties": {
              "nombre": {
                "type": "string",
                "example": "Cerveza"
              },
              "precio": {
                "type": "number",
                "example": 4000
=======
            },
            "MedioDePago": {
              "type": "object",
              "required": [
                "nombre"
              ],
              "properties": {
                "nombre": {
                  "type": "string",
                  "example": "Daviplata"
                }
              }
            },
            "Pedido": {
              "type": "object",
              "required": [
                "nombres",
                "cantidades",
                "mediodepago",
                "estado"
              ],
              "properties": {
                "nombres": {
                  "type": "array",
                  "items": {},
                  "example": ["Hamburguesa","Coca cola"],
                },
                "cantidades": {
                  "type": "array",
                  "items": {},
                  "example": [3,2],
                },
                "mediodepago": {
                  "type": "string",
                  "example": "Efectivo"
                },
                "estado": {
                  "type": "string",
                  "example": "Abierto"
                }
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
              }
            }
          },
          "MedioDePago": {
            "type": "object",
            "required": [
              "nombre"
            ],
            "properties": {
              "nombre": {
                "type": "string",
                "example": "Daviplata"
              }
            }
          },
          "Pedido": {
            "type": "object",
            "required": [
              "nombres",
              "cantidades",
              "mediodepago",
              "estado"
            ],
            "properties": {
              "nombres": {
                "type": "array",
                "items": {},
                "example": ["Hamburguesa","Coca cola"],
              },
              "cantidades": {
                "type": "array",
                "items": {},
                "example": [3,2],
              },
              "mediodepago": {
                "type": "string",
                "example": "Efectivo"
              },
              "estado": {
                "type": "string",
                "example": "Abierto"
              }
            }
          },
          "Pedidoxid": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Pedido"
            }
          },
          "Estado": {
            "type": "object",
            "required": [
              "Estado",
            ],
            "properties": {
              "estado": {
                "type": "string",
                "example": "Enviado"
              }
            }
          }
        }
      }
<<<<<<< HEAD
    }
  },
  apis: ['./src/routes*.js']
};
=======
  },
  apis: ['./src/routes*.js']
};
>>>>>>> a5418c99d559fcc9eb8f4889fc5565f852c37ba1
