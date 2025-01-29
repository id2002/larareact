<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles;

    protected $fillable = [
        'name',
        'email',
        'password',
        'gender',
        'status',
        'type_document'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public static function genders($key = null)
    {
        $types = [
            1 => __('Man'),
            2 => __('Woman'),
            3 => __('Nonbinary'),
            4 => __('No Preference'),
        ];

        if (!array_key_exists($key, $types)) {
            $key = null;
        }
        return  $key != null ? $types[$key] : $types ;
    }

    public static function typeDocument($key = null)
    {
        $types = [
            0 => __('NIT'),
            1 => __('CF'),
            2 => __('Passport'),
        ];

        if (!array_key_exists($key, $types)) {
            $key = null;
        }

        return $key !== null ? $types[$key] : $types;
    }

    public static function status($key = null)
    {
        $types = [
            2 => __('Active'),
            1 => __('Inactive'),
        ];

        if (!array_key_exists($key, $types)) {
            $key = null;
        }

        return $key !== null ? $types[$key] : $types;
    }
}
