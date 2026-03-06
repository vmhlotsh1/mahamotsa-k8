# Mahamotsa K8

A Next.js website for Mahamotsa, containerized with Docker and deployed to Kubernetes using Minikube.

## Stack

- Next.js
- React
- Docker
- Kubernetes
- Minikube
- kubectl

## Architecture

Browser -> Kubernetes Service -> Pod -> Docker Container -> Next.js App

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev -- --hostname 0.0.0.0
