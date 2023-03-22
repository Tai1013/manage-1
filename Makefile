init:
	pnpm run init
	make husky-init

dev:
	pnpm run dev

build:
	pnpm run build
	git add .
	git commit -m 'build: github page' 
	git push origin main	

husky-init:
	pnpm run prepare

release:
	pnpm run release
	git push --follow-tags origin main

release-build:
	make release
	make build