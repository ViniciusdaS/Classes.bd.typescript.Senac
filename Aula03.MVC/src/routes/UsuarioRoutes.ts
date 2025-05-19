import { Router } from "express"
import { criarUsuario, listarUsuarios, buscarUsuarioPorId, atualizarUsuario, deletarUsuario } from "../controllers/UsuariosController"

const router = Router(); 

router.post("/usuarios", criarUsuario)
router.get("/usuarios", listarUsuarios)
router.get("/usuarios/:id", buscarUsuarioPorId)
router.put("/usuarios/:id", atualizarUsuario)
router.delete("/usuarios", deletarUsuario)

export default router

