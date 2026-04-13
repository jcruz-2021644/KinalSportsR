import { useState } from 'react'

export const LoginForm = ({ onForgot }) => {
    return (
        <form className="space-y-5">
            <div>
                <label
                    htmlFor="emailOrUsername"
                    className="block text-sm font-medium text-gray-800 mb-1.5"
                >
                    Email o usuario
                </label>
                <input
                    id="emailOrUsername"
                    type="text"
                    placeholder="ejemplo@dominio.com"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-800 mb-1.5"
                >
                    Contraseña
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>

            <button
                type="submit"
                className="w-full bg-main-blue hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg
                transition-colors duration-200 text-sm disable:opacity-50"
            >
                Iniciar sesión
            </button>

            <button
                type="button"
                onClick={onForgot}
                className="text-main-blue hover:underline"
            >
                ¿Olvidaste la contraseña?
            </button>

        </form>

    )
}
