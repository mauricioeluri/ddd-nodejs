# 🧠 API REST para Fórum com DDD e Clean Architecture

Este projeto demonstra os **fundamentos de Domain-Driven Design (DDD)** e **Clean Architecture** aplicados à construção de uma **API REST** para um **sistema de fórum**. A proposta é estruturar o código de maneira orientada ao domínio, com separação clara de responsabilidades, casos de uso bem definidos, e uma abordagem funcional no tratamento de erros.

---

## 🚀 Tecnologias Utilizadas

- Node.js / TypeScript
- Arquitetura em camadas baseada em Clean Architecture
- Testes unitários com Vitest
- Event Sourcing simplificado com Domain Events

---

## 🧱 Conceitos Aplicados

### ✅ Domain-Driven Design (DDD)

- **Entidades e Aggregates**
- **Value Objects**
- **Repositórios com abstrações de persistência**
- **Domain Events**
- **Módulos organizados por subdomínios**

### 🧼 Clean Architecture

- Separação entre:
  - Camada de domínio (regras de negócio puras)
  - Casos de uso (application layer)

### 🎯 Outros Conceitos-Chave

- **Tratamento funcional de erros** (com `Either`, `left`, `right`)
- **Testes unitários centrados nos casos de uso**
- **Inversão de dependência e princípios SOLID**

### 📌 Objetivo Educacional

Este projeto é voltado ao estudo e prática de boas práticas de arquitetura de software no back-end. Não se trata de um produto finalizado, mas sim de uma base sólida para evolução e aprendizado contínuo.